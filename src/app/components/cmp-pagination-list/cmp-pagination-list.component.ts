import { Component, OnInit, Input } from '@angular/core';
import { IntBusqueda } from "../../interfaces/int-busqueda";

@Component({
  selector: 'app-cmp-pagination-list',
  templateUrl: './cmp-pagination-list.component.html',
  styleUrls: ['./cmp-pagination-list.component.css']
})
export class CmpPaginationListComponent implements OnInit {

  @Input ('resultadoBusqueda') resultadoBusqueda: IntBusqueda[];

  pageActual: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
