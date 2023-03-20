import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit{
  user:any;
  uemail:any;
  upassword:any;
  uname:any
  constructor(private route:Router, private userservice:UserService){}
  ngOnInit(): void {
  }

  getAllUser()
  {
  return this.userservice.getAllUser().subscribe((u:any)=>
  {
    console.log(u);
    this.user=u;
  }
  )};

  userLogin(loginform: any) {
    
    if (loginform.uemail === 'abc123' && loginform.upassword === 'abc123') {
      this.route.navigateByUrl("patientdash")
    }
    else{
      alert("Wrong Patient credentials!!")
    }
  }

}
