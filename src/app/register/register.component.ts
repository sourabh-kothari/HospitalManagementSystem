import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private pser:PatientserviceService,private router:Router) {}

  ngOnInit(): void {
  }

  register(registerForm:any) {
    console.log(registerForm);
    this.pser.addPatient(registerForm).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
