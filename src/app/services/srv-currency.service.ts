import { Injectable } from '@angular/core';
import { IntCurrency } from "../interfaces/int-currency";
import { HttpClient } from '@angular/common/http';
import {SubscribableOrPromise} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvCurrencyService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  precioDolar = (): Promise<IntCurrency[]> => {
    let promise = new Promise<IntCurrency[]>((resolve, reject) => {
      let values: IntCurrency[] = [];
      this.http.get('https://api.exchangeratesapi.io/latest?base=USD')
      .toPromise()
      .then( (response) => {
        Object.keys(response['rates']).forEach(function (key) {
          let resultado = {
            name: "",
            value: 0
          }
          resultado.name = String(key);
          resultado.value = Number(response['rates'][key]);
          values.push(resultado);
        })
        resolve(values as IntCurrency[])
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }

  private generateResultado = (name:string, value:number) => {
    let resultado = {
      name: "",
      value: 0
    }
    resultado.name = name;
    resultado.value = value;
    return resultado;
  }
}
