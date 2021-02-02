import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportesComponent } from './cmp-deportes.component';

describe('CmpDeportesComponent', () => {
  let component: DeportesComponent;
  let fixture: ComponentFixture<DeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
