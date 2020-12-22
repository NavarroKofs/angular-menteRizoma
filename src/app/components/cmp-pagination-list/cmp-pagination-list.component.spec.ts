import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPaginationListComponent } from './cmp-pagination-list.component';

describe('CmpPaginationListComponent', () => {
  let component: CmpPaginationListComponent;
  let fixture: ComponentFixture<CmpPaginationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpPaginationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPaginationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
