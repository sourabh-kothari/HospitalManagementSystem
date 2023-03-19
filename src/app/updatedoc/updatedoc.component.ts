import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-updatedoc',
  templateUrl: './updatedoc.component.html',
  styleUrls: ['./updatedoc.component.css']
})
export class UpdatedocComponent implements OnInit{

  doctor:any;

  constructor(private router:Router,private adser:AdminserviceService)
 {
   
 }

  ngOnInit(): void {
  }
  

  getAllDoctors()
  {
  return this.adser.getAllDoctors().subscribe((d:any)=>
  {
    console.log(d);
    this.doctor=d;
  }
  )};

 update(data:any)
 {
  data.id=localStorage.getItem("id");
  return this.adser.updateDoctor(data.id,data).subscribe((c:any)=>
      {
        this.gotolist();
      })
    }
  gotolist() {
    this.router.navigateByUrl("showdoc");
  }

}
