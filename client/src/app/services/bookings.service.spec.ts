import { TestBed, inject } from '@angular/core/testing';

import { BookingsService } from './bookings.service';

describe('BookingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingsService]
    });
  });

  it('should be created', inject([BookingsService], (service: BookingsService) => {
    expect(service).toBeTruthy();
  }));
});
