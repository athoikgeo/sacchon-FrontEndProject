import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterProfileComponent } from './reporter-profile.component';

describe('ReporterProfileComponent', () => {
  let component: ReporterProfileComponent;
  let fixture: ComponentFixture<ReporterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
