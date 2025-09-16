import { Component } from '@angular/core';
import {ApiRequest} from '../../services/api-request';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Record } from '../../interfaces/record';
import {DatabaseService} from '../../services/database-service';

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
  impactHistory: any[] = [];
  AllTotals = {waterTotal : 0, electricTotal : 0, carbonTotal : 0};


  record: Record = {
      id : 0,
      response : "",
      waterW : 0,
      electricW : 0,
      co2W : 0,
      version : 0
    }


  constructor(private apiService: ApiRequest, private database: DatabaseService) {}

  sendMessage(){
    this.apiService.sendMessage(this.userInput).subscribe({
      next: (data) => {
        this.impact = data; //stores environmental impact results
        this.record.id = 99;
        this.record.response = this.impact.response;
        this.record.waterW = this.impact.water;
        this.record.electricW = this.impact.electricity;
        this.record.co2W = this.impact.carbon;
        this.record.version = 99;
        this.database.addRecord(this.record);
        },
      error: (err) => {
        console.error('Error', err);
        this.impact = null;
        }
      });
    }

  async totalImpact(){
    this.impactHistory = await this.database.getAllRecords();
    this.AllTotals.waterTotal = this.impactHistory.reduce(
      (theTotal, current) => {
        theTotal += current.waterW;
        return theTotal;
        },
      {theTotal: 0} //Initial totals
      );
    this.AllTotals.electricTotal = this.impactHistory.reduce(
          (theTotal, current) => {
            theTotal += current.electricW;
            return theTotal;
            },
          {theTotal: 0} //Initial totals
          );
    this.AllTotals.carbonTotal = this.impactHistory.reduce(
              (theTotal, current) => {
                theTotal += current.co2W;
                return theTotal;
                },
              {theTotal: 0} //Initial totals
              );


    return this.AllTotals
    }
}
