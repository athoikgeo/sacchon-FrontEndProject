import { PatientModule } from './patient.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      `${this.baseUrl}/patient`
    )   
  }
  // with authorization

  // getPatients(): Observable<Patient[]>{
  // return this.http.get<Patient[]>(
  //   `${this.baseUrl}/patient`,
  //   {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials"))})}
  // )}

  addPatient( patient: Patient): Observable<Patient> {   
     alert(JSON.stringify(patient))
    return this.http.post<Patient>(
      `${this.baseUrl}/patient`,
      JSON.stringify(patient)
      )}
}
