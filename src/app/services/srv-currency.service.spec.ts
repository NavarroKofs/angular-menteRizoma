import { TestBed } from '@angular/core/testing';

import { SrvCurrencyService } from './srv-currency.service';

describe('SrvCurrencyService', () => {
  let service: SrvCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
