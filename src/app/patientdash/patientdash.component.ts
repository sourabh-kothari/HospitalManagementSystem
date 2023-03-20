import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patientdash',
  templateUrl: './patientdash.component.html',
  styleUrls: ['./patientdash.component.css']
})
export class PatientdashComponent implements OnInit{
  doctor:any;
  constructor(private proser:PatientserviceService,private router:Router){}

  ngOnInit(): void {
    this.getAllDoctors();
    
  }
  onLogout() {
    localStorage.clear();
    
    
    this.proser.logout();

   
   this.router.navigateByUrl("");
  }
  getAllDoctors() {
    return this.proser.getAllDoctors().subscribe((d:any)=>
  {
    console.log(d);
    this.doctor=d;
  })
}

bookappoinment(did:any){
  localStorage.setItem("did",did.toString());
  this.router.navigateByUrl("bookappoinment");
}

}
