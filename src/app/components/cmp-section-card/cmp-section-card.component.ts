import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IntBusqueda } from "../../interfaces/int-busqueda";

@Component({
  selector: 'cmp-section-card',
  templateUrl: './cmp-section-card.component.html',
  styleUrls: ['./cmp-section-card.component.css']
})
export class CmpSectionCardComponent implements OnInit {

  @Input ('card') card: IntBusqueda;

  ngOnInit(): void {
  }

}
