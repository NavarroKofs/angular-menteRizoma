import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpLoadingComponent } from './cmp-loading.component';

describe('CmpLoadingComponent', () => {
  let component: CmpLoadingComponent;
  let fixture: ComponentFixture<CmpLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
