import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private route:Router) {

  }
  ngOnInit(): void {

  }

  adminLogin(loginform: any) {
    if (loginform.loginId === 'ADMIN' && loginform.password === 'ADMIN') {
      this.route.navigateByUrl("admindash")
    }
    else{
      alert("Wrong ADMIN credentials!!")
    }
  }
}
