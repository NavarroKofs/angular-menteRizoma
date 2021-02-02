import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpComentarioComponent } from './cmp-comentario.component';

describe('CmpComentarioComponent', () => {
  let component: CmpComentarioComponent;
  let fixture: ComponentFixture<CmpComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
