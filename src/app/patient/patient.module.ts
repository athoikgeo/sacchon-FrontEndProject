import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientInsertComponent } from './patient-insert/patient-insert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeasurementComponent } from './measurement/measurement.component';



@NgModule({
  declarations: [
    PatientListComponent,
    PatientInsertComponent,
    MeasurementComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class PatientModule { }
