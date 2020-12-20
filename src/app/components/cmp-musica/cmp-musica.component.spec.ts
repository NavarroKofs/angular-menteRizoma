import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaComponent } from './cmp-musica.component';

describe('MusicaComponent', () => {
  let component: MusicaComponent;
  let fixture: ComponentFixture<MusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});