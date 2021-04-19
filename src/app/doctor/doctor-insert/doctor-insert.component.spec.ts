import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInsertComponent } from './doctor-insert.component';

describe('DoctorInsertComponent', () => {
  let component: DoctorInsertComponent;
  let fixture: ComponentFixture<DoctorInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
