import { TestBed } from '@angular/core/testing';

import { SrvRpServiceService } from './srv-rp-service.service';

describe('SrvRpServiceService', () => {
  let service: SrvRpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvRpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
