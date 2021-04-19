import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class ReporterService {

  constructor(private http:HttpClient) { }
  private readonly baseUrl = 'http://localhost:9000/v1'
  
  getReporters(): Observable<Reporter[]>{
    return this.http.get<Reporter[]>(
      `${this.baseUrl}/reporter`
    )   
  }
  // with authorization

  // getReporters(): Observable<Reporter[]>{
  // return this.http.get<Reporter[]>(
  //   `${this.baseUrl}/reporter`,
  //   {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials"))})}
  // )}

}

