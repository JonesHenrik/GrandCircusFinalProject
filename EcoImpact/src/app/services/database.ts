/*
import { Injectable, OnInit } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { HttpHeaders }        from '@angular/common/http';
import { lastValueFrom }      from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Database {

  //Need to get the URL
  private theServerURL : String = "";

  theRecords : any[] = []

  constructor(private theServer: HttpClient){}

async getRecords() : Promise<any[]> {
  const result : any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL))
  return result;
  }

async addRecord(newRecord : any) : Promise<any>{
  const headers = new HttpHeaders ({'Content-Type' : 'application/json'});
  return lastValueFrom(this.theServer.post(this.theServerURL, newRecord, {headers}));

  }
}
*/
