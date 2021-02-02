import { TestBed } from '@angular/core/testing';

import { SrvComentariosService } from './srv-comentarios.service';

describe('SrvComentariosService', () => {
  let service: SrvComentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvComentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
