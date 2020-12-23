import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpCarouselComponent } from './cmp-carousel.component';

describe('CmpCarouselComponent', () => {
  let component: CmpCarouselComponent;
  let fixture: ComponentFixture<CmpCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
