import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTinyDivisorComponent } from './cmp-tiny-divisor.component';

describe('CmpTinyDivisorComponent', () => {
  let component: CmpTinyDivisorComponent;
  let fixture: ComponentFixture<CmpTinyDivisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpTinyDivisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpTinyDivisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
