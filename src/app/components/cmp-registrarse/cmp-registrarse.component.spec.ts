import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpRegistrarseComponent } from './cmp-registrarse.component';

describe('CmpRegistrarseComponent', () => {
  let component: CmpRegistrarseComponent;
  let fixture: ComponentFixture<CmpRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpRegistrarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
