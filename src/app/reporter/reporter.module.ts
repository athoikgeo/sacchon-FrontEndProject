import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporterListComponent } from './reporter-list/reporter-list.component';
import { ReporterAdministrationComponent } from './reporter-administration/reporter-administration.component';
import { ReporterLoginFormComponent } from './reporter-login-form/reporter-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReporterProfileComponent } from './reporter-profile/reporter-profile.component';



@NgModule({
  declarations: [
    ReporterListComponent,
    ReporterAdministrationComponent,
    ReporterLoginFormComponent,
    ReporterProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReporterModule { }
