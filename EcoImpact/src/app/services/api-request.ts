import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequest {
  private theServerURL : string = "https://api.openai.com/v1/chat/completions"

  thePollutionResults : any[] = []

  constructor(private theServer:HttpClient) {}

  async getPollutionResults() : Promise<any[]> {
    const result : any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL))
    return result;
    }

  
}
