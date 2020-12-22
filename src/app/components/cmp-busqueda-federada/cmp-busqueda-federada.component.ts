import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBusqueda } from '../../interfaces/int-busqueda';

@Component({
  selector: 'app-cmp-busqueda-federada',
  templateUrl: './cmp-busqueda-federada.component.html',
  styleUrls: ['./cmp-busqueda-federada.component.css']
})
export class CmpBusquedaFederadaComponent implements OnInit {
  
  //interfaz de busqueda
  resultadoBusqueda: IntBusqueda[];
  //
  numResultados: number;

  constructor(private ServicioBuscarService: SrvBusquedaService) { }

  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => { 
    this.ServicioBuscarService.busquedaFederada(["reforma", "bbc", "deportes", "kudasai", "musica", "anmo"]).then((response) => {
      this.resultadoBusqueda = response;
      this.numResultados = this.resultadoBusqueda.length;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
