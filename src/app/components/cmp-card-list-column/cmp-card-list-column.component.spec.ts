import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpCardListColumnComponent } from './cmp-card-list-column.component';

describe('CmpCardListColumnComponent', () => {
  let component: CmpCardListColumnComponent;
  let fixture: ComponentFixture<CmpCardListColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpCardListColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpCardListColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
