import { Component } from '@angular/core';
import {ApiRequest} from '../../services/api-request';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-response',
  imports: [CommonModule, FormsModule],
  templateUrl: './response.html',
  styleUrl: './response.css'
})
export class Response {
  userInput: string = '';
  impact: {water: number, electricity: number, carbon: number, response: string} | null = null;
 // response:
  impactHistory: {water: number; electricity: number; carbon: number; response: string}[] =[]
  constructor(private apiService: ApiRequest) {}

  sendMessage(){
    this.apiService.sendMessage(this.userInput).subscribe({
      next: (data) => {
        this.impact = data; //stores environmental impact results
        this.impactHistory.push(data); // Adding to impactHistory array
        },
      error: (err) => {
        console.error('Error', err);
        this.impact = null;
        }
      });
    }

  get totalImpact(){
    return this.impactHistory.reduce(
      (totals, current) => {
        totals.water += current.water;
        totals.electricity += current.electricity;
        totals.carbon += current.carbon;
        return totals;
        },
      {water: 0, electricity: 0, carbon: 0} //Initial totals
      );

    }
}
