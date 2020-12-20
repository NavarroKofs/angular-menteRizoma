import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'prueba', component: PruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }