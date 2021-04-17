import { PatientInsertComponent } from './patient/patient-insert/patient-insert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

const routes: Routes = [
  {
    path: 'view',
    component: PatientListComponent
  },
  
  {
    path: 'insert',
    component: PatientInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
