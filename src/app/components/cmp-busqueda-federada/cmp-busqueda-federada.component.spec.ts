import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpBusquedaFederadaComponent } from './cmp-busqueda-federada.component';

describe('CmpBusquedaFederadaComponent', () => {
  let component: CmpBusquedaFederadaComponent;
  let fixture: ComponentFixture<CmpBusquedaFederadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpBusquedaFederadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpBusquedaFederadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
