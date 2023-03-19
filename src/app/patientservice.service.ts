import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  getAllDoctors() {
    return this.httpclient.get("/hospital/doctor");
  }
  patientLoggedin:boolean;

  constructor(private httpclient:HttpClient) {
    this.patientLoggedin=false;
   }

   setPatientLoggedin(){
    this.patientLoggedin=true;
   }
   getPatientLoggedin():boolean{
    return this.patientLoggedin;

   }

   getAllPatient(){
    return this.httpclient.get("/hospital/patient");
   }


   getPatientByDid(id:any){
    return this.httpclient.get("/hospital/patient/"+id)
   }

  public logout()
{
  return  this.patientLoggedin = false;
}
}
