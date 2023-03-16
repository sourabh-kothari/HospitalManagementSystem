import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }

  adminLogin(loginform: any) {
    if (loginform.loginId === 'ADMIN' && loginform.password === 'ADMIN') {
      alert("Welcome to ADMIN Home Page!!")
    }
    else{
      alert("Wrong ADMIN credentials!!")
    }
  }
}
