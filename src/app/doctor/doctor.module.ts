import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorInsertComponent } from './doctor-insert/doctor-insert.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorInsertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
