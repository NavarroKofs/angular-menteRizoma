import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CmpBusquedaFederadaComponent } from './components/cmp-busqueda-federada/cmp-busqueda-federada.component';
import { DeportesComponent } from "./components/cmp-deportes/cmp-deportes.component";
import { EntretenimientoComponent } from "./components/cmp-entretenimiento/cmp-entretenimiento.component";
import { MusicaComponent } from "./components/cmp-musica/cmp-musica.component";

const routes: Routes = [
  { path: '', component: IndexComponent},

  { path: 'deportes', component: DeportesComponent},

  { path: 'musica', component: MusicaComponent},
  { path: 'entretenimiento', component: EntretenimientoComponent},
  { path: 'LaBusqueda', component: CmpBusquedaFederadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }