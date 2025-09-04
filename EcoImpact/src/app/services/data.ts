import { Injectable } from '@angular/core';
import { ApiRequest } from '../../services/api-request';
import { Database } from '../../interfaces/database';

@Injectable({
  providedIn: 'root'
})
export class Data {
//DM
private final ApiRequest theApiRequest;

//CNSTR
  constructor(private apiRequestService: ApiRequest) {
    this.theApiRequest = apiRequestService;
    }

func getWaste(waste: {w, e, c}){

  }

}
