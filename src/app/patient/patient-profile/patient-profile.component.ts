import { Component, OnInit } from '@angular/core';
import { Consultation } from 'src/app/doctor/consultation';
import { Doctor } from 'src/app/doctor/doctor';
import { Measurement } from '../measurement';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

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
  consultations!: Consultation[];
  measurements!: Measurement[];

  ngOnInit(): void {
    this.getMyProfile();
    this.getDoctorConsultation();
    this.getMyMeasurements();
    }

    getMyProfile(){
      console.log(this.patientId);
      this.patientService.getMyProfile(this.patientId).subscribe((data: Patient) =>{
          this.patient = data;
          console.log(this.patient);
          
          });
      }

      getDoctorConsultation(){
        this.patientService.getDoctorConsultation(this.patientId).subscribe((data: Consultation[]) =>{
            this.consultations =<Consultation[]> data;
            console.log(this.patients);		
      });
      }

      getMyMeasurements(){
        this.patientService.getMyMeasurements(this.patientId).subscribe((data: Measurement[]) =>{
          this.measurements =<Measurement[]> data;
          console.log(this.measurements);		
      });
      }
      
}