import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoComponent } from './cmp-acceso.component';

describe('CmpAccesoComponent', () => {
  let component: AccesoComponent;
  let fixture: ComponentFixture<AccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
