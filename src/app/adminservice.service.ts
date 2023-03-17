import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  adminLoggedin: boolean;


  constructor(private httpclient:HttpClient) 
  { 
    this.adminLoggedin=false;
  }

  getAllDoctors()
   {
     return this.httpclient.get("/hospital/doctor");
   }

   setUserLoggedIn(){
    this.adminLoggedin=true;
   }
   getUserLoggedIn():boolean{
    return this.adminLoggedin;
   }

  addDoctor(doctor:any)
  {
   return  this.httpclient.post("/hospital/doctor",doctor);
  }

  deleteDoctor(id:number)
  {
    return  this.httpclient.delete("/hospital/doctor/"+id);
  }
  updateDoctor(id:any,doctor:any)
  {
  return this.httpclient.put("/hospital/doctor/",doctor);
  }
}
