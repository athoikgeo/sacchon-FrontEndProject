import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form!:FormGroup;

  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required],
    })
  }

  logIn(){
    let username: string;
    let password: string;
    let responseString = this.loginService.authentication(this.form.value);
    if(responseString == "OK"){
      // username = this.form.get('username').value;
      // password = this.form.get('password').value;
      // sessionStorage.setItem("credentials",username + ":" + password);
      this.router.navigate(['view'])
    }
    else{
      alert("Wrong username or password");
    }
  }
}