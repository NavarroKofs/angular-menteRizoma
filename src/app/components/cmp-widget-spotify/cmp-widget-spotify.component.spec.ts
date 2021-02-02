import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpWidgetSpotifyComponent } from './cmp-widget-spotify.component';

describe('CmpWidgetSpotifyComponent', () => {
  let component: CmpWidgetSpotifyComponent;
  let fixture: ComponentFixture<CmpWidgetSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpWidgetSpotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpWidgetSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
