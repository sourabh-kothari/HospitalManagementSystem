import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-viewappoinments',
  templateUrl: './viewappoinments.component.html',
  styleUrls: ['./viewappoinments.component.css']
})
export class ViewappoinmentsComponent implements OnInit{
  patient:any;
  patientByDid:any;
  showTable:boolean=false;
  public searchedKeyword: string = '';

  constructor(private router:Router,
    private pser:PatientserviceService){}
    
  ngOnInit(): void {
    this.getAllPatient();
  }
  onSearch(searchForm:any){
    console.log(searchForm);

  this.pser.getPatientByDid(searchForm).subscribe((data: any) => {
    console.log(data);
    this.ngOnInit();
    this.patient=data;
  });
  this.showTable =false;
  }

  getAllPatient()
  {
  return this.pser.getAllPatient().subscribe((p:any)=>
  {
    console.log(p);
    this.patient=p;
  }
  )};
}
