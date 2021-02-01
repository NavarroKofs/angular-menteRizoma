import { Component, OnInit } from '@angular/core';
import { ClsBusquedaModelo } from "../../class/cls-busqueda-modelo";
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-cmp-buscador',
  templateUrl: './cmp-buscador.component.html',
  styleUrls: ['./cmp-buscador.component.css']
})
export class CmpBuscadorComponent implements OnInit {
  //parametro de busqueda de la ruta /busqueda
  busquedaQuery: string;
  //variable para almancenar el valor del parametro query de la ruta
  busquedaQueryGet: string;
  //template-driven form
  frmTemplate = new ClsBusquedaModelo('');

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => { 
      this.busquedaQuery = params.get('query');
      
    });
  }

  sendTF(){
    this.busquedaQueryGet = this.frmTemplate.query;
    this.router.navigate(['/buscar/' + this.frmTemplate.query])
  }

}
