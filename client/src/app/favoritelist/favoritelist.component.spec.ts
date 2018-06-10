import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritelistComponent } from './favoritelist.component';

describe('FavoritelistComponent', () => {
  let component: FavoritelistComponent;
  let fixture: ComponentFixture<FavoritelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
