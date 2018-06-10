import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedialogComponent } from './deletedialog.component';

describe('DeletedialogComponent', () => {
  let component: DeletedialogComponent;
  let fixture: ComponentFixture<DeletedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
