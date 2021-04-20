import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Consultation } from './consultation';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  getAllDoctorsPatients(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  private readonly baseUrl = 'http://localhost:9000/v1'
  
  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(
      `${this.baseUrl}/doctor`
    )   
  }
  // with authorization

  // getDoctors(): Observable<Doctor[]>{
  // return this.http.get<Doctor[]>(
  //   `${this.baseUrl}/doctor`,
  //   {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials"))})}
  // )}

  addDoctor( doctor: Doctor): Observable<Doctor> {  
    alert(JSON.stringify(doctor)) 
    return this.http.post<Doctor>(
      `${this.baseUrl}/doctor`,
      doctor
    )
  }

  getMyProfile(doctorId: string): Observable<Doctor>{
    console.log(doctorId);
    return this.http.get<Doctor>(
      `${this.baseUrl}/doctor/${doctorId}`
      );
    }

  getMyPatients(doctorId: string): Observable<any>{
      return this.http.get<any>(
        `${this.baseUrl}/doctor/${doctorId}/patient`
        );
      }

  getMyPatient(doctorId: string, patientId: string): Observable<any>{
        return this.http.get<any>(
          `${this.baseUrl}/doctor/${doctorId}/patient/${patientId}`
          );
        }

  getPatientMeasurements(doctorId: string, patientId: string): Observable<any>{
    return this.http.get<any>(
      `${this.baseUrl}/doctor/${doctorId}/patient/${patientId}/measurement`
      );
 
  }

  getMyConsultations(doctorId: String): Observable<any>{
    return this.http.get<any>(
      `${this.baseUrl}/doctor/${doctorId}/consultation`
      );
  }

  addConsultation(doctorId: string, patientId: string, consultation: Consultation ): Observable<any>{
    return this.http.post<any>(
      `${this.baseUrl}/doctor/${doctorId}/patient/${patientId}/consultation`,
      consultation
    );
  
  }

  updateConsultation( doctorId: string, patientId: string, consultation: Consultation): Observable<any>{
    return this.http.put<any>(
      `${this.baseUrl}/doctor/${doctorId}/patient/${patientId}/consultation`,
      consultation 
    );
  }

  deleteConsultation( doctorId: string, patientId: string, consultationId: string): Observable<any>{
    return this.http.delete<any>(
      `${this.baseUrl}/doctor/${doctorId}/patient/${patientId}/consultation/${consultationId}`
    );
  }

  }

  // getPendingPatient(_doctorId: Doctor,): Observable<any>{
  //   return this.http.get<any>(
  //     ''
  //   ),
  // }



