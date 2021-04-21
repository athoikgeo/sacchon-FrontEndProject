import { PatientEditAccountComponent } from './patient-edit-account/patient-edit-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientInsertComponent } from './patient-insert/patient-insert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeasurementComponent } from './measurement/measurement.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientLoginFormComponent } from '../login/patient-login-form/patient-login-form.component';



@NgModule({
  declarations: [
    PatientListComponent,
    PatientInsertComponent,
    MeasurementComponent,
    PatientProfileComponent,
    PatientEditAccountComponent,
    PatientLoginFormComponent
    
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class PatientModule { }
