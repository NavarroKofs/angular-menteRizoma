import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBbc } from '../../interfaces/int-bbc';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  //interfaz de busqueda
  resultadoBusqueda: IntBbc;
  //parametro de busqueda de la ruta Search
  busquedaQuery: string;

  arreglo: any[];

  constructor(private ServicioBuscarService: SrvBusquedaService) { }

  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => {
    this.arreglo = this.ServicioBuscarService.busquedaFederada(["bbc"]).then;
    console.log(this.arreglo);
  }

}
