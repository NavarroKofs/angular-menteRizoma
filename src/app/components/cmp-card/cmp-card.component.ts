import { Component, OnInit, Input } from '@angular/core';
import { IntBusqueda } from "../../interfaces/int-busqueda";

@Component({
  selector: 'app-cmp-card',
  templateUrl: './cmp-card.component.html',
  styleUrls: ['./cmp-card.component.css']
})
export class CmpCardComponent implements OnInit {

  @Input ('card') card: IntBusqueda;

  constructor() { }

  ngOnInit(): void {
  }

}
