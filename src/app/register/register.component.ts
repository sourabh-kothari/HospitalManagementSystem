import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private user:UserService,private router:Router) {}

  ngOnInit(): void {
  }

  register(registerForm:any) {
    console.log(registerForm);
    this.user.addUser(registerForm).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
      this.router.navigateByUrl("patientlogin");
      alert("Registration Successfull..!!");
    });
  }

}
