import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAccesoComponent } from './cmp-acceso.component';

describe('CmpAccesoComponent', () => {
  let component: CmpAccesoComponent;
  let fixture: ComponentFixture<CmpAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpAccesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
