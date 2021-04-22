import { Doctor } from './../doctor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  form!:FormGroup; 

  constructor(private fb: FormBuilder, private doctorService:DoctorService) { }
  doctorId: string = '1';
  
  ngOnInit(): void {
    this.form = this.fb.group({
      doctorId:["",],
      username:["",],
      password:["",],
      fistName:["",],
      lastName: ["",],
      role: ["",] 

      })
    }

  onClickSubmit(){
    
    let doctor:Doctor = this.form.value;
    
 
    this.doctorService.updateAccount(doctor).subscribe((data:Doctor) =>{
      console.log(data)
    })

    this.doctorService.deleteAccount(doctor.doctorId).subscribe((data:Doctor) =>{
      console.log(data)
    })

  }
}