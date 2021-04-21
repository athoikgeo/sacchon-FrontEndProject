import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{

  title = 'sacchon-FrontEndProject';
  isLogged!:boolean;

  subscription!:Subscription;

  constructor(private router:Router, private loginServise:LoginService){}

  ngOnInit(): void {
    if(sessionStorage.getItem("credentials") == null){
     this.isLogged = false;
     this.router.navigate(['login'])
  }
  else{
    this.isLogged = true
    this.router.navigate(['view'])
  }
   
    this.subscription = this.loginServise.responsibleOfAuth.subscribe(data =>{
    this.isLogged = data;
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  logOut(){
  sessionStorage.removeItem("credentials");
  this.isLogged = true;
  this.router.navigate(['login'])
  }
}
