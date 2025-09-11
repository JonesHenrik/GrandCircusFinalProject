import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {data} from "../interfaces/data"

@Injectable({
  providedIn: 'root'
})
export class ApiRequest {
  private readonly API_URL = "https://api.openai.com/v1/chat/completions";
  private readonly OPENAI_API_KEY = "";
  private bearerAuth = `Bearer  ${this.OPENAI_API_KEY}` // Create authorization variable to use in HTTP Header

  //private totalWaste : Database = [];

  constructor(private http: HttpClient){}

  sendMessage(userMessage: string): Observable<{response: string; water: number; electricity: number; carbon: number}>{
    const headers = new HttpHeaders({
      "Authorization" : this.bearerAuth,
      "Content-Type": "application/json"
      });
    const body = {
                       "model": "gpt-3.5-turbo",
                       "messages": [
                         {"role": "user",
                           "content": userMessage}
                         ],
                       "max_tokens": 150,
                       "temperature": 0.7
                       };
    return this.http.post<any>(this.API_URL, body, {headers}).pipe(
      map((res) => {
        const totalTokens = res.usage.total_tokens;

        const waterPerThousandTokens = 500.0; //Milliliters of water placeholder
        const electricityPerThousandTokens = 0.04; //kWh of electric placeholder
        const cabonPerThousandTokens = 4.32; //gram of carbon placeholder

        const water = (totalTokens / 1000) * waterPerThousandTokens;
        const electricity = (totalTokens / 1000) * electricityPerThousandTokens;
        const carbon = (totalTokens / 1000) * cabonPerThousandTokens;
        const response = res.choices[0].message.content; //Pulling the response from the api

        return {water, electricity, carbon, response};
        })
      );
    }
  }
