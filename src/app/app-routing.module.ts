import { MeasurementComponent } from './patient/measurement/measurement.component';
import { NewConsultationComponent } from './doctor/new-consultation/new-consultation.component';
import { ReporterListComponent } from './reporter/reporter-list/reporter-list.component';
import { PatientInsertComponent } from './patient/patient-insert/patient-insert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorInsertComponent } from './doctor/doctor-insert/doctor-insert.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { EditAccountComponent } from './doctor/edit-account/edit-account.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { PatientEditAccountComponent } from './patient/patient-edit-account/patient-edit-account.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component: LoginFormComponent},
  {path: 'view',component: PatientListComponent},
  {path: 'insert',component: PatientInsertComponent},
  {path: 'view_doctors',component: DoctorListComponent},
  {path: 'insert_doctor',component: DoctorInsertComponent},
  {path: 'doctor_profile',component: DoctorProfileComponent},
  {path: 'doctor_edit_account',component: EditAccountComponent},
  {path: 'doctor_new_consultation',component: NewConsultationComponent},
  {path: 'patient_profile',component: PatientProfileComponent},
  {path: 'patient_measurement',component: MeasurementComponent},
  {path: 'view_reporters',component: ReporterListComponent},
  {path: 'patient_edit_account', component: PatientEditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
