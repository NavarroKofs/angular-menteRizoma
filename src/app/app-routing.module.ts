import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { DeportesComponent } from './components/cmp-deportes/cmp-deportes.component';
import { MusicaComponent } from './components/cmp-musica/cmp-musica.component';
import { EntretenimientoComponent } from './components/cmp-entretenimiento/cmp-entretenimiento.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'prueba', component: PruebaComponent},
  { path: 'deportes', component: DeportesComponent},  
  { path: 'musica', component: MusicaComponent},
  { path: 'entretenimiento', component: EntretenimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }