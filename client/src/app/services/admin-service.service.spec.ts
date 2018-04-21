import { TestBed, inject } from '@angular/core/testing';

import { AdminServiceService } from './admin-service.service';

describe('AdminServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminServiceService]
    });
  });

  it('should be created', inject([AdminServiceService], (service: AdminServiceService) => {
    expect(service).toBeTruthy();
  }));
});
