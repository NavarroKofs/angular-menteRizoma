import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpClimaComponent } from './cmp-clima.component';

describe('CmpClimaComponent', () => {
  let component: CmpClimaComponent;
  let fixture: ComponentFixture<CmpClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
