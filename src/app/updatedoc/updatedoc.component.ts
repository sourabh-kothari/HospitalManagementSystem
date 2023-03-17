import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-updatedoc',
  templateUrl: './updatedoc.component.html',
  styleUrls: ['./updatedoc.component.css']
})
export class UpdatedocComponent implements OnInit{

  ngOnInit(): void {
  
  }
 constructor(private router:Router,private prodser:AdminserviceService)
 {
   
 }
 update(data:any)
 {
  data.id=localStorage.getItem("id");
  return this.prodser.updateDoctor(data.id,data).subscribe((c:any)=>
      {
        this.gotolist();
      })
    }
  gotolist() {
    this.router.navigateByUrl("showdoc");
  }

}
