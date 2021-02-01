import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpInsertResetCodeComponent } from './cmp-insert-reset-code.component';

describe('CmpInsertResetCodeComponent', () => {
  let component: CmpInsertResetCodeComponent;
  let fixture: ComponentFixture<CmpInsertResetCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpInsertResetCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpInsertResetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
