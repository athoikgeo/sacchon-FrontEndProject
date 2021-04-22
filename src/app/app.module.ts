import { ReporterModule } from './reporter/reporter.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientModule,
    DoctorModule,
    ReporterModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
