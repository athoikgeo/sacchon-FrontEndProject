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
  [x: string]: any;

  form!:FormGroup; 
 

  constructor(private fb: FormBuilder,PatientService:PatientService) { }

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
    this.PatientService.addPatient(patient).subscribe((data:Patient) =>{
      console.log(data)
    })

 
  
  }

}
