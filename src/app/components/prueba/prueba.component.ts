import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBusqueda } from '../../interfaces/int-busqueda';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  providers: [NgbCarouselConfig]
})
export class PruebaComponent implements OnInit {

  //interfaz de busqueda
  resultadoBusqueda: IntBusqueda[];

  constructor(private ServicioBuscarService: SrvBusquedaService) {}

  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => { 
    this.ServicioBuscarService.busquedaFederada(["reforma", "bbc", "deportes", "kudasai", "musica", "anmo"]).then((response) => {
      this.resultadoBusqueda = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }
}
