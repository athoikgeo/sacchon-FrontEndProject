import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-insert',
  templateUrl: './doctor-insert.component.html',
  styleUrls: ['./doctor-insert.component.scss']
})
export class DoctorInsertComponent implements OnInit {
  
  form!:FormGroup; 

  constructor(private fb: FormBuilder, private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
    username:["",],
    password:["",],
    firstName:["",],
    lastName:["",],
    role: ["",] 
    })
  }
  
  onClickSubmit(){
    
    let doctor:Doctor = this.form.value;
    this.doctorService.addDoctor(doctor).subscribe((data:Doctor) =>{
      console.log(data)
    }) 
  }

}

