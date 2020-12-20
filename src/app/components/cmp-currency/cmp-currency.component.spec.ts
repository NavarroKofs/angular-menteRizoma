import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpCurrencyComponent } from './cmp-currency.component';

describe('CmpCurrencyComponent', () => {
  let component: CmpCurrencyComponent;
  let fixture: ComponentFixture<CmpCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
