import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpCardComponent } from './cmp-card.component';

describe('CmpCardComponent', () => {
  let component: CmpCardComponent;
  let fixture: ComponentFixture<CmpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
