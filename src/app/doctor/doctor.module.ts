import { DoctorInsertComponent } from './doctor-insert/doctor-insert.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { NewConsultationComponent } from './new-consultation/new-consultation.component';
import { DoctorComponent } from './doctor.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorInsertComponent,
    DoctorProfileComponent,
    EditAccountComponent,
    NewConsultationComponent,
    DoctorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class DoctorModule { }
