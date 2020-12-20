import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HttpClientModule } from '@angular/common/http';
import { CmpCarouselComponent } from './components/cmp-carousel/cmp-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CmpClimaComponent } from './components/cmp-clima/cmp-clima.component';
import { CmpCurrencyComponent } from './components/cmp-currency/cmp-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexComponent,
    HeaderComponent,
    PruebaComponent,
    CmpCarouselComponent,
    CmpClimaComponent,
    CmpCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
