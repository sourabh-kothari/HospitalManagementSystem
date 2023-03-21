import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  bookAppointmentForm: any;

 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  bookAppointment( bookAppointmentForm:any) {
   
    if (this.bookAppointmentForm.valid) {
      // perform action to book appointment
      console.log(this.bookAppointmentForm.value);
    }
  }
  }

