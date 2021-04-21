import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterLoginFormComponent } from './reporter-login-form.component';

describe('ReporterLoginFormComponent', () => {
  let component: ReporterLoginFormComponent;
  let fixture: ComponentFixture<ReporterLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
