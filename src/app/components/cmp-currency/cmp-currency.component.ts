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
  precioDolar: IntCurrency[];
  precioDolarMexico: number;
  valorConversión: number;

  constructor(private ServicioCurrency: SrvCurrencyService) { }

  ngOnInit(): void {
    this.busquedaGit();
  }

  busquedaGit = () => { 
    this.ServicioCurrency.precioDolar().then( (response) => {
      this.precioDolar = response;
      this.precioDolarMexico = response[27]['value'];
    }, (error) => {
      alert("Error: " + error.statusText)
    });
  }

  getConversion(base, symbol){
    this.ServicioCurrency.getConversion(base, symbol).then( (response) => {
      this.valorConversión = response[0]['value'];
    }, (error) => {
      alert("Error: " + error.statusText)
    });
  }
//https://api.exchangeratesapi.io/latest?base=MXN&symbols=USD
}
