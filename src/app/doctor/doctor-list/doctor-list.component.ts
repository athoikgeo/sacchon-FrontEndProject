import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  constructor(private doctorService:DoctorService ) { }
  
  doctors!: Doctor[];

  ngOnInit(): void {
  }

  getDoctors(){
    this.doctors = [],
    this.doctorService.getDoctors().subscribe(data =>{
      this.doctors = data;
      console.log(this.doctors);
  
    });
  }

}

