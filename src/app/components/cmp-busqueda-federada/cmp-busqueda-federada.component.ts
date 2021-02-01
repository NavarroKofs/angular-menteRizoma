import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from '../../services/srv-busqueda.service';
import { IntBusqueda } from '../../interfaces/int-busqueda';
import { ClsBusquedaModelo } from "../../class/cls-busqueda-modelo";
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-cmp-busqueda-federada',
  templateUrl: './cmp-busqueda-federada.component.html',
  styleUrls: ['./cmp-busqueda-federada.component.css']
})
export class CmpBusquedaFederadaComponent implements OnInit {
  
  //interfaz de busqueda
  resultadoBusqueda: IntBusqueda[];
  //
  numResultados: number;
  //parametro de busqueda de la ruta /busqueda
  busquedaQuery: string;
  //variable para almancenar el valor del parametro query de la ruta
  busquedaQueryGet: string;
  //template-driven form
  frmTemplate = new ClsBusquedaModelo('');

  constructor(private ServicioBuscarService: SrvBusquedaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => { 
      this.busquedaQuery = params.get('query');
      this.busquedaQueryGet = params.get('query');
      this.frmTemplate.query = params.get('query');
      this.busquedaGit();
    });
  }

  busquedaGit = () => {
    this.ServicioBuscarService.serchNotice(this.busquedaQuery).then((response) => {
      this.resultadoBusqueda = response;
      this.numResultados = this.resultadoBusqueda.length;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
