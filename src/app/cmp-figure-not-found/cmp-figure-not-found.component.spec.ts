import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpFigureNotFoundComponent } from './cmp-figure-not-found.component';

describe('CmpFigureNotFoundComponent', () => {
  let component: CmpFigureNotFoundComponent;
  let fixture: ComponentFixture<CmpFigureNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpFigureNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpFigureNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
