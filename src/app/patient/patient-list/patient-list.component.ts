import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor(private patientService:PatientService ) { }
  
  patients!: Patient[];

  ngOnInit(): void {
  }

  getPatients(){
    this.patients = [],
    this.patientService.getPatients().subscribe(data =>{
      this.patients =<Patient[]> data;
      console.log(this.patients);
      
    });
  }
}
