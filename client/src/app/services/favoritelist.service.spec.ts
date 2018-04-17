import { TestBed, inject } from '@angular/core/testing';

import { FavoritelistService } from './favoritelist.service';

describe('FavoritelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritelistService]
    });
  });

  it('should be created', inject([FavoritelistService], (service: FavoritelistService) => {
    expect(service).toBeTruthy();
  }));
});
