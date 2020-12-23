import { Component, OnInit, Input } from '@angular/core';
import { IntBusqueda } from "../../interfaces/int-busqueda";

@Component({
  selector: 'app-cmp-card-list-column',
  templateUrl: './cmp-card-list-column.component.html',
  styleUrls: ['./cmp-card-list-column.component.css']
})
export class CmpCardListColumnComponent implements OnInit {

  @Input ('resultadoBusqueda') resultadoBusqueda: IntBusqueda[];

  constructor() { }

  ngOnInit(): void {
  }

}
