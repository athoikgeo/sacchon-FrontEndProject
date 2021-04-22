import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Consultation } from '../consultation';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-new-consultation',
  templateUrl: './new-consultation.component.html',
  styleUrls: ['./new-consultation.component.scss']
})
export class NewConsultationComponent implements OnInit {

  form!:FormGroup; 

  constructor(private fb: FormBuilder, private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      medication:["",],
      dosage:["",],
      date:["",],
      doctorId:["",],
      patientId: ["",] 
      })
    }

  onClickSubmit(){
    
    let consultation:Consultation = this.form.value;


    this.doctorService.addConsultation(consultation).subscribe((data:Consultation) =>{
      console.log(data)
    }) 
 
    // this.doctorService.updateConsultation(consultation.doctorId, consultation).subscribe((data:Consultation) =>{
    //   console.log(data)
    // })

    // this.doctorService.deleteConsultation(consultation.consultationId).subscribe((data:Consultation) =>{
    //   console.log(data)
    // })

  }

}