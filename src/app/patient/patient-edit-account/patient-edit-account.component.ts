import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-edit-account',
  templateUrl: './patient-edit-account.component.html',
  styleUrls: ['./patient-edit-account.component.scss']
})
export class PatientEditAccountComponent implements OnInit {

 
  form!:FormGroup; 
  patientService: any;

  constructor(private fb: FormBuilder, patientService:PatientService){}
  

  ngOnInit(): void {
    this.form = this.fb.group({
      patientId:["",],
      username:["",],
      password:["",],
      fistName:["",],
      lastName: ["",],
      role: ["",] 

    })
  }

  onClickSubmit(){
    
    let patient:Patient = this.form.value;

 
    this.patientService.updateAccount(patient.patientId, patient).subscribe((data:Patient) =>{
      console.log(data)
    })

    this.patientService.deleteAccount(patient.patientId).subscribe((data:Patient) =>{
      console.log(data)
    })

  }
}