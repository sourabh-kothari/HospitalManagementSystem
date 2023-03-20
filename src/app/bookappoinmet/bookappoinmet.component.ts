import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-bookappoinmet',
  templateUrl: './bookappoinmet.component.html',
  styleUrls: ['./bookappoinmet.component.css']
})
export class BookappoinmetComponent implements OnInit{
  
  patient:any;

  constructor(private ptser:PatientserviceService,private router:Router){
  }

  ngOnInit(): void {
  }

  onSubmit(appoinmentForm: any) {
    console.log(appoinmentForm);
  
    this.ptser.addPatient(appoinmentForm).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
      alert("Appoinment Booked..!!");
    });
  }

}
