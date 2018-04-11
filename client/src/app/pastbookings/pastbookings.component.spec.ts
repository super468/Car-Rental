import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastbookingsComponent } from './pastbookings.component';

describe('PastbookingsComponent', () => {
  let component: PastbookingsComponent;
  let fixture: ComponentFixture<PastbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
