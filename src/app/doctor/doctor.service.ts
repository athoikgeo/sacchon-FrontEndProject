import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getMyPatients(): Observable<any>{
      return this.http.get<any>(
        `${this.baseUrl}/patient`
        );
      }

  getMyPatient(doctorId: string, patientId: string): Observable<any>{
        return this.http.get<any>(
          `${this.baseUrl}/patient/${patientId}`
          );
        }

  getPatientMeasurements(): Observable<any>{
    return this.http.get<any>(
      `${this.baseUrl}/measurement`,
     {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials")!)})}

      );
 
  }

  // getMyConsultations(doctorId: String): Observable<any>{
  //   return this.http.get<any>(
  //     `${this.baseUrl}/consultation`
  //     );
  // }

  addConsultation(consultation: Consultation ): Observable<any>{
    alert(JSON.stringify(consultation)) 
    return this.http.post<any>(
      `${this.baseUrl}/consultation`,
      consultation
    );
  }

  // updateConsultation(consultationId: String, consultation: Consultation): Observable<any>{
  //   return this.http.put<any>(
  //     `${this.baseUrl}/consultation/${consultationId}`,
  //     consultation 
  //   );

  // }
  // deleteConsultation(consultationId: string) {
  //  return this.http.delete<any>(
  //     `${this.baseUrl}/consultation/${consultationId}` 
  //   );
  //  }

  updateAccount(doctor: Doctor): Observable<any>{
    return this.http.put<any>(
      `${this.baseUrl}/doctor/1`,
      doctor 
    );
  }

  deleteAccount( doctorId: string): Observable<any>{
    return this.http.delete<any>(
      `${this.baseUrl}/doctor/${doctorId}`
    );
  }




  }

  // getPendingPatient(_doctorId: Doctor,): Observable<any>{
  //   return this.http.get<any>(
  //     ''
  //   ),
  // }



