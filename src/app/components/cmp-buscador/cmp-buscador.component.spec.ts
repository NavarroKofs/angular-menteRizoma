import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpBuscadorComponent } from './cmp-buscador.component';

describe('CmpBuscadorComponent', () => {
  let component: CmpBuscadorComponent;
  let fixture: ComponentFixture<CmpBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
