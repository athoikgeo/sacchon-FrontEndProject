import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit, OnDestroy {

  isLogged!: Boolean;
  subscription!: Subscription;
  constructor(private router: Router, private loginService: LoginService) { }


  ngOnInit(): void {
    console.log("Hi");
    this.subscription = this.loginService.responsibleOfAuth.subscribe(data => {
      console.log("Not working" + data)
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
    this.isLogged = false;
    this.router.navigate(['/login'])
  }
}
