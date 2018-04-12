import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CncldbookingsComponent } from './cncldbookings.component';

describe('CncldbookingsComponent', () => {
  let component: CncldbookingsComponent;
  let fixture: ComponentFixture<CncldbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CncldbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CncldbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
