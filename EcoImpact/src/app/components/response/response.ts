import { Component } from '@angular/core';
import {ApiRequest} from '../../services/api-request';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Record } from '../interfaces/record';


@Component({
  selector: 'app-response',
  imports: [CommonModule, FormsModule], //Importing these to use built in angular methods in html
  templateUrl: './response.html',
  styleUrl: './response.css'
})
export class Response {
  userInput: string = ''; //Stores the user text from html input field
  //The most recent waste values will be stored in impact as well as the response
  //Initially null since no values are used yet
  impact: {water: number, electricity: number, carbon: number, response: string} | null = null;
 // impactHistory is meant to store the total amount of waste and response to later be added to the database
  impactHistory: {response: Record; waterW: Record; electricW: Record; co2W: Record}[] =[]
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
