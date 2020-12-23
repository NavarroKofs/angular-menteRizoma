import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDeportesComponent } from './cmp-deportes.component';

describe('CmpDeportesComponent', () => {
  let component: CmpDeportesComponent;
  let fixture: ComponentFixture<CmpDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpDeportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
