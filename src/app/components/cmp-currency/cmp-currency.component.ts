import { Component, OnInit } from '@angular/core';
import { SrvCurrencyService } from "../../services/srv-currency.service";
import { IntCurrency } from "../../interfaces/int-currency";
import { FormCurrencyModel } from "../../class/form-currency-model";

@Component({
  selector: 'app-cmp-currency',
  templateUrl: './cmp-currency.component.html',
  styleUrls: ['./cmp-currency.component.css']
})
export class CmpCurrencyComponent implements OnInit{
  precioDolar: IntCurrency[];
  precioDolarMexico: number;
  valorConversion: number;
  base: string;
  symbol: string;
  cantidad: number;
  //template-driven form
  frmTemplate = new FormCurrencyModel('', '');

  constructor(private ServicioCurrency: SrvCurrencyService) { }

  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => { 
    this.ServicioCurrency.precioDolar().then( (response) => {
      this.precioDolar = response;
      this.precioDolarMexico = parseFloat((response[27]['value']).toFixed(2));
      this.frmTemplate.base = 'Selecciona la moneda de origen';
      this.frmTemplate.symbol = 'Selecciona la moneda de destino';
    }, (error) => {
      alert("Error: " + error.statusText)
    });
  }

  getConversion(){
    event.preventDefault();
    this.base = (<HTMLInputElement>document.getElementById("base")).value;
    this.symbol = (<HTMLInputElement>document.getElementById("symbol")).value;
    this.cantidad = Number((<HTMLInputElement>document.getElementById("quantity")).value);
    let verificadorBase = false;
    let verificadorSymbol = false;
    for (let index = 0; index < this.precioDolar.length; index++) {
      if (this.precioDolar[index]['name'] == this.base) {
        verificadorBase = true;
        break;
      }
    }
    for (let index = 0; index < this.precioDolar.length; index++) {
      if (this.precioDolar[index]['name'] == this.symbol) {
        verificadorSymbol = true;
        break;
      }
    }
    if ((this.cantidad > 0) && (verificadorBase) && (verificadorSymbol)) {
      this.ServicioCurrency.getConversion(this.base, this.symbol).then( (response) => {
        this.valorConversion = response[0]['value'] * this.cantidad;
        }, (error) => {
          alert("Error: " + error.statusText)
        }); 
    } else {
      alert('Introduzca los datos correctamente');
    }
  }
}
