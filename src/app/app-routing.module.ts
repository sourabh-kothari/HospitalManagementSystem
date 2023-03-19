import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PatientdashComponent } from './patientdash/patientdash.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { RegisterComponent } from './register/register.component';
import { ShowdocComponent } from './showdoc/showdoc.component';
import { UpdatedocComponent } from './updatedoc/updatedoc.component';

const routes: Routes = [
  {path:'',pathMatch: 'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'logincomponent',component:LogincomponentComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'patientlogin',component:PatientloginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'showdoc',component:ShowdocComponent},
  {path:'register',component:RegisterComponent},
  {path:'updatedoc',component:UpdatedocComponent},
  {path:'patientdash',component:PatientdashComponent},
  {path:'bookappointment',component: BookappointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
