import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporterListComponent } from './reporter-list/reporter-list.component';
import { ReporterAdministrationComponent } from './reporter-administration/reporter-administration.component';



@NgModule({
  declarations: [
    ReporterListComponent,
    ReporterAdministrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReporterModule { }
