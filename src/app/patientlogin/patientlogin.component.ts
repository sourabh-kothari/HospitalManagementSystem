import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit{

  ngOnInit(): void {
  }

  patientLogin(loginform: any) {
    if (loginform.loginId === '' && loginform.password === '') {
      alert("Welcome to Patient Home Page!!")
    }
    else{
      alert("Wrong Patient credentials!!")
    }
  }

}
