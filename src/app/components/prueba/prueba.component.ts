import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBusqueda } from '../../interfaces/int-busqueda';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  //interfaz de busqueda
  resultadoBusqueda: IntBusqueda[];
  //parametro de busqueda de la ruta Search
  busquedaQuery: string;

  constructor(private ServicioBuscarService: SrvBusquedaService) { }

  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => { 
    this.ServicioBuscarService.busquedaFederada(["bbc", "reforma"]).then((response) => {
      this.resultadoBusqueda = response;
      console.log(this.resultadoBusqueda);
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
