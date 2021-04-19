import { DoctorInsertComponent } from './doctor-insert/doctor-insert.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorInsertComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DoctorModule { }
