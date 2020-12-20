import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBusqueda } from '../../interfaces/int-busqueda';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cmp-deportes',
  templateUrl: './cmp-deportes.component.html',
  styleUrls: ['./cmp-deportes.component.css']
})
export class DeportesComponent implements OnInit {

    //interfaz de busqueda
    resultadoBusqueda: IntBusqueda[];
    //parametro de busqueda de la ruta Search
    busquedaQuery: string;

  constructor(private ServicioBuscarService: SrvBusquedaService, config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => { 
    this.ServicioBuscarService.busquedaFederada(["deportes"]).then((response) => {
      this.resultadoBusqueda = response;
      console.log(this.resultadoBusqueda);
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
