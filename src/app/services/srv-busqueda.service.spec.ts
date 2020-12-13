import { TestBed } from '@angular/core/testing';

import { SrvBusquedaService } from './srv-busqueda.service';

describe('SrvBusquedaService', () => {
  let service: SrvBusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvBusquedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
