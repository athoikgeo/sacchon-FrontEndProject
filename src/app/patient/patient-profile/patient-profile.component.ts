import { Measurement } from 'src/app/patient/measurement';
import { PatientService } from 'src/app/patient/patient.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor/doctor';
import { Patient } from '../patient';
// import { Measurement } from '../measurement';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  doctorId:string = '1';
  patientId:string = '1';

  doctor!: Doctor;
  patients!: Patient[];
  patient!: Patient;
  measurements!: Measurement[];

  ngOnInit(): void {
    this.getMyProfile();
    this.getDoctorConsultation();
    this.getMyMeasurements();
    }

    getMyProfile(){
      console.log(this.patientId);
      this.patientService.getMyProfile(this.patientId).subscribe(data =>{
          this.patient = data;
          console.log(this.patient);
          
          });
      }

      getDoctorConsultation(){
        this.patientService.getDoctorConsultation(this.patientId).subscribe(data =>{
            this.measurements =<Measurement[]> data;
            console.log(this.patients);		
      });
      }

      getMyMeasurements(){
        this.patientService.getMyMeasurements(this.patientId).subscribe(data =>{
          this.measurements =<Measurement[]> data;
          console.log(this.measurements);		
      });
      }
      
}
