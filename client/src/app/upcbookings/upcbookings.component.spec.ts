import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcbookingsComponent } from './upcbookings.component';

describe('UpcbookingsComponent', () => {
  let component: UpcbookingsComponent;
  let fixture: ComponentFixture<UpcbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
