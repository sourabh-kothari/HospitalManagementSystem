import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
patient:any;

constructor(private pser:PatientserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(patientForm: any) {
    console.log(patientForm);
  
    this.pser.addPatient(patientForm).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }
    bookingSuccess() {
      Swal.fire('Appoinment Booked','', 'success');
    }
  }

