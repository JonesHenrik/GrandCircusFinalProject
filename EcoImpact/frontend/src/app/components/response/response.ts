import { Component } from '@angular/core';
import {ApiRequestService} from './api-request.service';

@Component({
  selector: 'app-response',
  imports: [],
  templateUrl: './response.html',
  styleUrl: './response.css'
})
export class Response {
  userInput: string = '';
  impact: {water: number, electricity: number, carbon: number} | null = null;

  constructor(private apiService: ApiRequestService) {}

  sendMessage(){
    this.apiService.sendMessage(this.userInput).subscribe({
      next: (data) => {
        this.impact = data; //stores environmental impact results
        },
      error: (err) => {
        console.error('Error', err);
        this.impact = null;
        }
      });
    }
}
