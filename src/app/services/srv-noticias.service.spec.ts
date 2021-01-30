import { TestBed } from '@angular/core/testing';

import { SrvNoticiasService } from './srv-noticias.service';

describe('SrvNoticiasService', () => {
  let service: SrvNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
