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
import { DeportesComponent } from './components/cmp-deportes/cmp-deportes.component';
import { MusicaComponent } from './components/cmp-musica/cmp-musica.component';
import { EntretenimientoComponent } from './components/cmp-entretenimiento/cmp-entretenimiento.component';
import { CmpTinyDivisorComponent } from './components/cmp-tiny-divisor/cmp-tiny-divisor.component';
import { CmpCardComponent } from './components/cmp-card/cmp-card.component';
import { CmpCardListColumnComponent } from './components/cmp-card-list-column/cmp-card-list-column.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CmpPaginationListComponent } from './components/cmp-pagination-list/cmp-pagination-list.component';
import { CmpBuscadorComponent } from './components/cmp-buscador/cmp-buscador.component';
import { CmpBusquedaFederadaComponent } from './components/cmp-busqueda-federada/cmp-busqueda-federada.component';
import { CmpLoadingComponent } from './components/cmp-loading/cmp-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexComponent,
    HeaderComponent,
    PruebaComponent,
    CmpCarouselComponent,
    CmpClimaComponent,
    CmpCurrencyComponent,
    DeportesComponent,
    MusicaComponent,
    EntretenimientoComponent,
    CmpTinyDivisorComponent,
    CmpCardComponent,
    CmpCardListColumnComponent,
    CmpPaginationListComponent,
    CmpBuscadorComponent,
    CmpBusquedaFederadaComponent,
    CmpLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
