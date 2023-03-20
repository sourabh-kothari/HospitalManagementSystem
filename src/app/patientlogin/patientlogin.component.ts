import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit{
  user:User=new User();
  uemail:any;
  upassword:any;
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


  userLogin(){
    console.log(this.user);
    this.userservice.loginUser(this.user).subscribe(data=>{
      if(data==null){
        console.log("not present");
        alert("login failed")
      }else{
        console.log("you have got");
        alert(" login successful");
      }
     
     

    });
   // error=>alert("sorry please correct crediential"));
  }

}
