import { Component, OnInit } from '@angular/core';
import { SrvCurrencyService } from "../../services/srv-currency.service";
import { IntCurrency } from "../../interfaces/int-currency";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cmp-currency',
  templateUrl: './cmp-currency.component.html',
  styleUrls: ['./cmp-currency.component.css']
})
export class CmpCurrencyComponent implements OnInit {

  rates = {};
  precioDolar: IntCurrency;
  precioDolarMexico: number;

  constructor(private ServicioCurrency: SrvCurrencyService) { }

  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => { 
    this.ServicioCurrency.precioDolar().then( (response) => {
      this.precioDolar = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  getConversion(){

  }

}
