import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBusqueda } from '../../interfaces/int-busqueda';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cmp-entretenimiento',
  templateUrl: './cmp-entretenimiento.component.html',
  styleUrls: ['./cmp-entretenimiento.component.css']
})
export class EntretenimientoComponent implements OnInit {
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

  redirect($event){
    window.open(this.resultadoBusqueda[$event.target.id].url, "_blank","noopener noreferrer");
  }

   busquedaGit = () => {
    this.ServicioBuscarService.busquedaFederada(["kudasai", "anmo"]).then((response) => {
      this.resultadoBusqueda = response;
      for (let noticia = 5; noticia < this.resultadoBusqueda.length; noticia++) {
        let resumen = this.resultadoBusqueda[noticia].description.split('.')[0]+'. ';
        resumen = resumen.split("Este articulo pertenece")[0];
        this.resultadoBusqueda[noticia].description = resumen;
      }

    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }
}
