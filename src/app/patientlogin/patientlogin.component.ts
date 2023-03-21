import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit{


  userlogin:any;
  userDetails:any;
  user:any;
  loggedIn:any=false;

  constructor(private route:Router, private userservice:UserService){
    this.userlogin=[];
    this.userDetails=[];
    localStorage.clear();
  }
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

  userLogin()
  {
    
      console.log(this.userlogin);
      return this.userservice.loginUser(this.userlogin.uemail,this.userlogin.upassword).subscribe((data:any)=>{
      this.userDetails=data;
      if(this.userDetails==null)
      {
        alert("you have entered wrong credentials");
        this.loggedIn=false;
      }
      else{
        this.loggedIn=true;
        localStorage.setItem("loggedIn",JSON.stringify(this.loggedIn));
        localStorage.setItem("userdetails",JSON.stringify(this.userDetails));
        alert("Logged in Successfully..!!");
        this.route.navigateByUrl("patientdash");
      }
      console.log(this.loggedIn);
      })
    }
    
}
