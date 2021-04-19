import { ReporterListComponent } from './reporter/reporter-list/reporter-list.component';
import { PatientInsertComponent } from './patient/patient-insert/patient-insert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorInsertComponent } from './doctor/doctor-insert/doctor-insert.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path: 'login',
    component: LoginFormComponent
  },

  {
    path: 'view',
    component: PatientListComponent
  },
  
  {
    path: 'insert',
    component: PatientInsertComponent
  },

  {
    path: 'view_doctors',
    component: DoctorListComponent
  },
  
  {
    path: 'insert_doctor',
    component: DoctorInsertComponent
  },

  {
    path: 'view_reporters',
    component: ReporterListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRoutingModule { }
