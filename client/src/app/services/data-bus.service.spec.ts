import { TestBed, inject } from '@angular/core/testing';

import { DataBusService } from './data-bus.service';

describe('DataBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBusService]
    });
  });

  it('should be created', inject([DataBusService], (service: DataBusService) => {
    expect(service).toBeTruthy();
  }));
});
