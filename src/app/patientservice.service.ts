import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private httpclient:HttpClient) { }

  addPatient(user:any)
  {
   return this.httpclient.post("/hospital/user",user);
  }
}
