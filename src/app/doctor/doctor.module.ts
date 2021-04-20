import { DoctorInsertComponent } from './doctor-insert/doctor-insert.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { NewConsultationComponent } from './new-consultation/new-consultation.component';


@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorInsertComponent,
    DoctorProfileComponent,
    EditAccountComponent,
    NewConsultationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DoctorModule { }
