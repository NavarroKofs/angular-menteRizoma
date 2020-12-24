import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClsBusquedaModelo } from "../../class/cls-busqueda-modelo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  //parametro de busqueda de la ruta /busqueda
  busquedaQuery: string;
  //variable para almancenar el valor del parametro query de la ruta
  busquedaQueryGet: string;
  //template-driven form
  frmTemplate = new ClsBusquedaModelo('');

  constructor(private route: ActivatedRoute, private router: Router) { }

  isCollapse = true;
  toggleState() {
    let foo = this.isCollapse
    this.isCollapse = foo === false ? true : false;
  }
  loggedIn = false;
  loggedUser:any = null;

  ngOnInit(): void {
    this.logo = "../../images/logo-mente-rizoma.png";
  }

  sendTF(){
    this.busquedaQueryGet = this.frmTemplate.query;
    this.router.navigate(['/buscar/' + this.frmTemplate.query])
  }

}
