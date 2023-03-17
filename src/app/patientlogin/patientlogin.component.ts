import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit{
  constructor(private route:Router){}
  ngOnInit(): void {
  }

  patientLogin(loginform: any) {
    if (loginform.loginId === 'abc123' && loginform.password === 'abc123') {
      this.route.navigateByUrl("patientdash")
    }
    else{
      alert("Wrong Patient credentials!!")
    }
  }

}
