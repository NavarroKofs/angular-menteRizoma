import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpResetPasswordComponent } from './cmp-reset-password.component';

describe('CmpResetPasswordComponent', () => {
  let component: CmpResetPasswordComponent;
  let fixture: ComponentFixture<CmpResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
