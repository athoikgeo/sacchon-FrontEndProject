import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { Patient } from 'src/app/patient/patient';
import { Measurement } from 'src/app/patient/measurement';
import { Consultation } from '../consultation';


@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
	

	

  

  constructor(private doctorService:DoctorService) { }

  doctorId:string = '1';
  patientId:string = '1';

  doctor!: Doctor;
  patients!: Patient[];
  patient!: Patient;
  measurements!: Measurement[];
  consultations!: Consultation[];


  availablePatients!: number;
  consultablePatients!: number;
 

  ngOnInit(): void {
    this.getMyProfile();
	this.getMyPatients();
	this.getMyPatient();
	this.getPatientMeasurements();
	this.getMyConsultations();
  }

  getMyProfile(){
	console.log(this.doctorId);
	this.doctorService.getMyProfile(this.doctorId).subscribe(data =>{
			this.doctor = data;
			console.log(this.doctor);
			
		  });
	}
  getMyPatients(){
		this.doctorService.getMyPatients(this.doctorId).subscribe(data =>{
			this.patients =<Patient[]> data;
			console.log(this.patients);
				
		});
	}

  getMyPatient(){
		this.doctorService.getMyPatient(this.doctorId, this.patientId).subscribe(data =>{
			this.patient =<Patient> data;
			console.log(this.patient);				
		});
	}

  getPatientMeasurements(){
	this.doctorService.getPatientMeasurements(this.doctorId, this.patientId).subscribe(data =>{
			this.measurements =<Measurement[]> data;
			console.log(this.patients);		
});
}
getMyConsultations(){
	this.doctorService.getMyConsultations(this.doctorId).subscribe(data =>{
		this.consultations =<Consultation[]> data;
		console.log(this.consultations);		
});
}

// addConsultation(){
// 	this.doctorService.addConsultation(this.doctorId, this.patientId,this.Consultation).subscribe(data =>{
// 		this.consultations =<Consultation[]> data;
// 		console.log(this.consultations);		
// });

}



