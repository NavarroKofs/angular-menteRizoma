import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBusqueda } from '../../interfaces/int-busqueda';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
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
  //parametro de busqueda de la ruta Search
  busquedaQuery: string;

  name = "prueba";
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.wrap = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.resultadoBusqueda = [
      {"description": "Hola", "image": "https://uploads-ssl.webflow.com/5d6ed3ec5fd0246da423f7a8/5dcc3ae6e62de1121a4aab86_no-disponible-7448e295ce0d80db8b02f2e8e09c6148ecbd626418792e792d0195e8c26851b9.png", "url": "www.facebook.com", "title": "hola", "source": "deforma"},
      {"description": "Hola1", "image": "https://uploads-ssl.webflow.com/5d6ed3ec5fd0246da423f7a8/5dcc3ae6e62de1121a4aab86_no-disponible-7448e295ce0d80db8b02f2e8e09c6148ecbd626418792e792d0195e8c26851b9.png", "url": "www.youtube.com", "title": "hola2", "source": "reforma"}
    ]
  }
}
