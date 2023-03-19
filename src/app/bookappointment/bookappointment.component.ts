import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  bookAppointmentForm: any;
  form!: FormGroup;

 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookAppointmentForm = this.formBuilder.group({
      patientId: ['', Validators.required],
      patientName: ['', Validators.required],
      doctorId: ['', Validators.required],
      patientAadhar: ['', Validators.required],
      patientAge: ['', Validators.required],
      patientDisease: ['', Validators.required],
      patientMobileNo: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfAppointment: ['', Validators.required]
    });
  }

  bookAppointment( bookAppointmentForm:any) {
   
    if (this.bookAppointmentForm.valid) {
      // perform action to book appointment
      console.log(this.bookAppointmentForm.value);
    }
  }

}


