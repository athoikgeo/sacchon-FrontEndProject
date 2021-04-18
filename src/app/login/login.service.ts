import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  params = new HttpParams();

  responsibleOfAuth = new Subject<boolean>();

  constructor(private http:HttpClient) { }
  
  private readonly baseUrl = 'http://localhost:9000/v1';

  authentication(values:any): string{
    if(true){
      this.responsibleOfAuth.next(true);
      return "OK";
    }

    // this.params.append('username', values.get('username').value);
    // this.params.append('username', values.get('password').value);
    // return this.http.get<any>(`${this.baseUrl}/patient`)
    // {params:this.params}

  }
}
