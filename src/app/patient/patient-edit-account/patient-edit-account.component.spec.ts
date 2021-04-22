import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditAccountComponent } from './patient-edit-account.component';

describe('PatientEditAccountComponent', () => {
  let component: PatientEditAccountComponent;
  let fixture: ComponentFixture<PatientEditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
