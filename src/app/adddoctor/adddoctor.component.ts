import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit{

  constructor(private adser:AdminserviceService,private router:Router){}

  ngOnInit(): void {
  }

  onAdd(doctorForm: any) {
    console.log(doctorForm);
  
    this.adser.addDoctor(doctorForm).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
