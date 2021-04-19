import { Component, OnInit } from '@angular/core';
import { Reporter } from '../reporter';
import { ReporterService } from '../reporter.service';

@Component({
  selector: 'app-reporter-list',
  templateUrl: './reporter-list.component.html',
  styleUrls: ['./reporter-list.component.scss']
})
export class ReporterListComponent implements OnInit {

  constructor(private reporterService:ReporterService ) { }
  
  reporters!: Reporter[];

  ngOnInit(): void {
  }

  getReporters(){
    this.reporters = [],
    this.reporterService.getReporters().subscribe(data =>{
      this.reporters =<Reporter[]> data;
      console.log(this.reporters);     
    });
  }
}
