import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ShowdocComponent } from './showdoc/showdoc.component';
import { RegisterComponent } from './register/register.component';
import { UpdatedocComponent } from './updatedoc/updatedoc.component';
import { PatientdashComponent } from './patientdash/patientdash.component';
<<<<<<< HEAD
import { ViewappoinmentsComponent } from './viewappoinments/viewappoinments.component';
import { BookappoinmetComponent } from './bookappoinmet/bookappoinmet.component';
=======
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
>>>>>>> 7340812f7c9f0c655fa59e3b5ad2e634f6184172

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LogincomponentComponent,
    AdminloginComponent,
    PatientloginComponent,
    ContactusComponent,
    AdmindashComponent,
    ShowdocComponent,
    RegisterComponent,
    UpdatedocComponent,
    PatientdashComponent,
<<<<<<< HEAD
    ViewappoinmentsComponent,
    BookappoinmetComponent
=======
    BookappointmentComponent
>>>>>>> 7340812f7c9f0c655fa59e3b5ad2e634f6184172
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
