import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CmpBusquedaFederadaComponent } from './components/cmp-busqueda-federada/cmp-busqueda-federada.component';
import { DeportesComponent } from "./components/cmp-deportes/cmp-deportes.component";
import { EntretenimientoComponent } from "./components/cmp-entretenimiento/cmp-entretenimiento.component";
import { MusicaComponent } from "./components/cmp-musica/cmp-musica.component";
import { AccesoComponent } from "./components/cmp-acceso/cmp-acceso.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CmpRegistrarseComponent } from './components/cmp-registrarse/cmp-registrarse.component';
import {LoginService} from "./services/login.service"

const routes: Routes = [
  { path: '', component: IndexComponent},

  { path: 'deportes', component: DeportesComponent},

  { path: 'musica', component: MusicaComponent},
  { path: 'acceso', component: AccesoComponent},
  { path: 'registrarse', component: CmpRegistrarseComponent},
  { path: 'entretenimiento', component: EntretenimientoComponent},
  { path: 'buscar/:query', component: CmpBusquedaFederadaComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginService]
})
export class AppRoutingModule { }