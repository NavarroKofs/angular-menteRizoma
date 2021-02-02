import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpNoticeComponent } from './cmp-notice.component';

describe('CmpNoticeComponent', () => {
  let component: CmpNoticeComponent;
  let fixture: ComponentFixture<CmpNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
