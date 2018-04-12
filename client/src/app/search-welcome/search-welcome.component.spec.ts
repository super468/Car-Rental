import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWelcomeComponent } from './search-welcome.component';

describe('SearchWelcomeComponent', () => {
  let component: SearchWelcomeComponent;
  let fixture: ComponentFixture<SearchWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
