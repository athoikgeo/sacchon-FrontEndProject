import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-insert',
  templateUrl: './patient-insert.component.html',
  styleUrls: ['./patient-insert.component.scss']
})
export class PatientInsertComponent implements OnInit {

  form!:FormGroup; 

  constructor(private fb: FormBuilder, private patientService:PatientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
    username:["",],
    password:["",],
    firstname:["",],
    lastname:["",],
    role: ["",] 
    })
  }
  
  onClickSubmit(){
    let patient:Patient = this.form.value;
    this.patientService.addPatient(patient).subscribe((data:Patient) =>{
      console.log(data)
    }) 
  }

}
