import { Injectable, OnInit } from '@angular/core';
import { ApiRequest } from '../../services/api-request';
import { Record } from '../../interfaces/record';
import { Database } from '../../services/database'




@Injectable({
  providedIn: 'root'
})
export class Data {

theRecords : any[] = [];

newRecord : Record = {
  id : 0,
    response : "",
    waterW : 0,
    electricW : 0,
    co2W : 0
  }

 async ngOnInit() {
    this.theRecords = await this.Database.getRecords();
  }


 async addRecord(newRecord : Place){
    await this.Database.addRecord(newRecord)

    this.theRecords = await this.Database.getRecords();
  }
}
