import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { IntBusqueda } from "../../interfaces/int-busqueda";

@Component({
  selector: 'app-cmp-carousel',
  templateUrl: './cmp-carousel.component.html',
  styleUrls: ['./cmp-carousel.component.css']
})
export class CmpCarouselComponent implements OnInit {
  
  @Input ('resultadoBusqueda') resultadoBusqueda: IntBusqueda[];


  constructor() { }

  ngOnInit(): void {}

}
