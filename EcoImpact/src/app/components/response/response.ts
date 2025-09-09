import { Component } from '@angular/core';
import {ApiRequest} from '../../services/api-request';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {Database} from "../interfaces/database"

@Component({
  selector: 'app-response',
  imports: [CommonModule, FormsModule],
  templateUrl: './response.html',
  styleUrl: './response.css'
})
export class Response {
  userInput: string = '';
  impact: {water: number, electricity: number, carbon: number} | null = null;

  constructor(private apiService: ApiRequest) {}

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

  displayTotal(){
    this

    }
}
