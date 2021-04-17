import { PatientModule } from './patient.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  private readonly baseUrl = 'http://localhost:9000/v1'

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(
      "http://localhost:9000/v1/patient"
    )   
  }

  addPatient(patient: Patient): Observable<Patient> {   
    return this.http.post<Patient>(
      `${this.baseUrl}/patient`,
      patient
    )
  }

   
}
