// import { Measurement } from 'src/app/patient/measurement';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Measurement } from '../measurement';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {
  form!:FormGroup; 

  constructor(private fb: FormBuilder, private patientService:PatientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      measurementId:["",] ,
      date:["",] ,
      carbIn:["",] ,
      glucoseLevel:["",] ,
      patientId: ["",] 
      })
    }

  onClickSubmit(){
    
    let measurement:Measurement = this.form.value;
    

    this.patientService.addMeasurement(measurement.patientId, measurement).subscribe((data:Measurement) =>{
      console.log(data)
    }) 

    this.patientService.updateMeasurement(measurement.patientId, measurement).subscribe((data:Measurement) =>{
      console.log(data)
    })

    this.patientService.deleteMeasurement(measurement.patientId, measurement.measurementId).subscribe((data:Measurement) =>{
      console.log(data)
    })


}
}
