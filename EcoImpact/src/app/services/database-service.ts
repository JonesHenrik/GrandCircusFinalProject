import { Injectable, OnInit } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { HttpHeaders }        from '@angular/common/http';
import { lastValueFrom }      from 'rxjs';
import { Record } from '../interfaces/record';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
 //Need to get the URL
  private theServerURL = "http://localhost:8081/v1/records";

  theRecords : any[] = []

  constructor(private theServer: HttpClient){}

async getAllRecords(): Promise<any[]>{
  return await lastValueFrom(this.theServer.get<Record[]>(this.theServerURL));
  }

async getRecordByID(id: number) : Promise<Record>{
  return await lastValueFrom(this.theServer.get<Record>(`${this.theServerURL}/${id}`));
  }

async addRecord(record: Record): Promise<Record>{
  return await lastValueFrom(this.theServer.post<Record>(this.theServerURL, record));
  }

}

