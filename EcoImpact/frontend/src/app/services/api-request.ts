import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequest {
  const API_URL: string = "https://api.openai.com/v1/chat/completions"
  const ApiKey = ""


/*
  thePollutionResults : any[] = []

  constructor(private theServer:HttpClient) {}

  async getPollutionResults() : Promise<any[]> {
    const result : any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL))
    return result;
    }

  async addPollutionResult(newResult : any) : Promise<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
      });
    return lastValueFrom(this.theServer.post(this.theServerURL, newResult, {headers}));
    }
*/

}
