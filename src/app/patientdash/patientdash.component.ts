import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-patientdash',
  templateUrl: './patientdash.component.html',
  styleUrls: ['./patientdash.component.css']
})
export class PatientdashComponent implements OnInit{
  doctor:any;
  constructor(private proser:AdminserviceService,private router:Router){}

  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors() {
    return this.proser.getAllDoctors().subscribe((d:any)=>
  {
    console.log(d);
    this.doctor=d;
  })
}

}
