// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { DoctorService } from '../doctor/doctor.service';
// import { PatientService } from '../patient/patient.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   userForm!:FormGroup;
//   submitted = false;
  
   

//   roles = ['ROLE_DOCTOR', 'ROLE_PATIENT']

//   constructor(private fb: FormBuilder,public patient:PatientService,public doctor:DoctorService, private router: Router) { }

  
 
  
//   ngOnInit(): void {
//     this.userForm= this.fb.group({
//       firstName:['', Validators.required],
//       lastName: ['', Validators.required],
      
//       role:['', Validators.required],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     })
//   }
  // convenience getter for easy access to form fields
  // get f() { return this.userForm.controls; }

  // RegisterSumbit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.userForm.invalid) {
  //         return;
  //     }

     
  //     this.userS.currentUser.first_name = this.userForm.get('firstName').value;
  //     this.userS.currentUser.last_name=this.userForm.get('lastName').value;
      
  //     this.userS.currentUser.email=this.userForm.get('username').value;
      
      //dob?
     

  //     if(this.userForm.get('role').value=="ROLE_DOCTOR")
  //     {
  //       this.userS.currentUser.accountType=2;
  //     }else if(this.userForm.get('typeAccount').value=="ROLE_PATIENT") 
  //     {this.userS.currentUser.accountType=3;}
  //     else this.userS.currentUser.accountType=1;


  //     this.userS.currentUser.amka=this.userForm.get('amka').value;
  //     this.userS.currentUser.password=this.userForm.get('password').value;

      
  //         this.router.navigate(['login']);
      
  // }

  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;

  // }



 
// }
