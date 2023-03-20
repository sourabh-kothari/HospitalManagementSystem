import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-showdoc',
  templateUrl: './showdoc.component.html',
  styleUrls: ['./showdoc.component.css']
})
export class ShowdocComponent implements OnInit{
  doctor:any;
  doctorToUpdate = {
    did:"",
    dname:"",
    dfield:"",
    dage:"",
    dgender:"",
    dpatientcount:"",
    dfees:"",
    dlistoftreatments:""
  }
  showAdd: boolean=false;
  showUpdate: boolean=false;
  ngOnInit(): void {
    this.getAllDoctors();
  }
  constructor(private adser:AdminserviceService,private router:Router){

  }
  getAllDoctors()
  {
  return this.adser.getAllDoctors().subscribe((d:any)=>
  {
    console.log(d);
    this.doctor=d;
  }
  )};

 onAdd(doctorForm: any) {
  console.log(doctorForm);

  this.adser.addDoctor(doctorForm).subscribe((data: any) => {
    console.log(data);
    this.ngOnInit();
  });
  this.showAdd =false;
}

deleteDoc(id:any){
  return  this.adser.deleteDoctor(id).subscribe((data:any) => {
    this.ngOnInit();
    console.log(data);
   });

}

edit(doctor: any){
  this.doctorToUpdate = doctor;
}

update()
 {
  this.adser.updateDoctor(this.doctorToUpdate).subscribe((resp) => {
      console.log(resp);
      this.ngOnInit();
    });
    this.showUpdate =false;
    }    
}
