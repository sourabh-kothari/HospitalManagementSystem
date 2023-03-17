import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private adser:AdminserviceService,private route:Router){

  }
  onLogout() {
    localStorage.clear();
    
    
    this.adser.logout();
   
   this.route.navigateByUrl("");
  }

}
