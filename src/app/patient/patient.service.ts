import { PatientModule } from './patient.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { Measurement } from './measurement';

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
       patient 
      )}
      getMyProfile(patientId: string): Observable<Patient>{
        console.log(patientId);
        return this.http.get<Patient>(
          `${this.baseUrl}/patient/${patientId}`
          );
        }
    
        getMyMeasurements(patientId: String): Observable<any>{
          return this.http.get<any>(
            `${this.baseUrl}/patient/${patientId}/measurement`
            );
        }
    
        getDoctorConsultation(patientId: string): Observable<any>{
          return this.http.get<any>(
            `${this.baseUrl}/patient/${patientId}/consultation`
            );
       
        }
    
      // with authorization
    
      // getPatients(): Observable<Patient[]>{
      // return this.http.get<Patient[]>(
      //   `${this.baseUrl}/patient`,
      //   {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials"))})}
      // )}
    
    
    
      
    addMeasurement(patientId: string, measurement: Measurement ): Observable<any>{
      return this.http.post<any>(
        `${this.baseUrl}/patient/${patientId}/measurement`,
        measurement
      )}
    
      
    updateMeasurement( patientId: string,  measurement: Measurement): Observable<any>{
        return this.http.put<any>(
          `${this.baseUrl}/patient/${patientId}/measurement`,
          measurement 
        );
        }
    deleteMeasurement( patientId: string,  measurementId: string): Observable<any>{
          return this.http.delete<any>(
            `${this.baseUrl}/patient/${patientId}/measurement/${measurementId}` 
          );
      
    
    
    }
    
    
    updateAccount( patientId: string,  patient: Patient): Observable<any>{
      return this.http.put<any>(
        `${this.baseUrl}/patient/${patientId}`,
        patient 
      );
    }
    
    deleteAccount( patientId: string): Observable<any>{
      return this.http.delete<any>(
        `${this.baseUrl}/patient/${patientId}`
      );
    }
    
    }