import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

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
}
