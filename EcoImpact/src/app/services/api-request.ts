import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequest {
  private readonly API_URL = "https://api.openai.com/v1/chat/completions";
  private readonly OPENAI_API_KEY = "";

  constructor(private http: HttpClient){}

  sendMessage(userMessage: string): Observable<{water: number; electricity: number; carbon: number}>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
      });
    const body = {
      model: 'gpt-3.5-turbo',
      message: [
        {role: 'user', content: userMessage}
        ],
      max_token: 150,
      temperature: 0.7
      };
    return this.http.post<any>(this.API_URL, body, {headers}).pipe(
      map((res) => {
        const totalTokens = res.usage.total_tokens;

        const waterPerThousandTokens = 0.5; //Gallons of water placeholder
        const electricityPerThousandTokens = 0.003; //kWh of electric placeholder
        const cabonPerThousandTokens = 0.5; //gram of carbon placeholder

        const water = (totalTokens / 1000) * waterPerThousandTokens;
        const electricity = (totalTokens / 1000) * electricityPerThousandTokens;
        const carbon = (totalTokens / 1000) * cabonPerThousandTokens;

        return {water, electricity, carbon};
        })
      );
    }
}
