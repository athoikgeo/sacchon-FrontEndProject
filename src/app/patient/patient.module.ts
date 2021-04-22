import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientInsertComponent } from './patient-insert/patient-insert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeasurementComponent } from './measurement/measurement.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientEditAccountComponent } from './patient-edit-account/patient-edit-account.component';



@NgModule({
  declarations: [
    PatientListComponent,
    PatientInsertComponent,
    MeasurementComponent,
    PatientProfileComponent,
    PatientEditAccountComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class PatientModule { }
