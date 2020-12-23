import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpSectionCardComponent } from './cmp-section-card.component';

describe('CmpSectionCardComponent', () => {
  let component: CmpSectionCardComponent;
  let fixture: ComponentFixture<CmpSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpSectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
