import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit, OnDestroy {

  isLogged!: Boolean;
  subscription!:Subscription;
  constructor(private router: Router,private loginService:LoginService) { }


  ngOnInit(): void {

    this.subscription = this.loginService.responsibleOfAuth.subscribe(data => {
      this.isLogged = data;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logOut() {
    sessionStorage.removeItem("credentials");
    this.isLogged = true;
    this.router.navigate(['login'])
  }
}
