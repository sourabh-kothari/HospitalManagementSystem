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
  showAdd: boolean=false;
  ngOnInit(): void {
    this.getAllDoctors();
  }
  constructor(private proser:AdminserviceService,private router:Router){

  }
  getAllDoctors()
  {
  return this.proser.getAllDoctors().subscribe((d:any)=>
  {
    console.log(d);
    this.doctor=d;
  }
  )};

 onAdd(doctorForm: any) {
  console.log(doctorForm);

  this.proser.addDoctor(doctorForm).subscribe((data: any) => {
    console.log(data);
    this.ngOnInit();
  });
  this.showAdd =false;
}

deleteDoc(id:any){
  return  this.proser.deleteDoctor(id).subscribe((data:any) => {
    this.ngOnInit();
    console.log(data);
   });

}
updateDoc(id:number,pro:any)
{
  localStorage.setItem("id",id.toString());
  this.router.navigateByUrl("updatedoc");
}
}
