import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterAdministrationComponent } from './reporter-administration.component';

describe('ReporterAdministrationComponent', () => {
  let component: ReporterAdministrationComponent;
  let fixture: ComponentFixture<ReporterAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
