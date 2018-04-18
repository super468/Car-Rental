import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontrolpanelComponent } from './admincontrolpanel.component';

describe('AdmincontrolpanelComponent', () => {
  let component: AdmincontrolpanelComponent;
  let fixture: ComponentFixture<AdmincontrolpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincontrolpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincontrolpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
