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
        const rates = JSON.stringify(response['rates']);
        let divisor = rates.split('"');
        for (let index = 1; index < divisor.length; index+=2) {
          let resultado = {
            name: divisor[index],
            value: response['rates'][divisor[index]]
          }
          values.push(resultado);
        }
        resolve(values as IntCurrency[]);
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }

  getConversion = (base:string, symbol:string): Promise<IntCurrency[]> => {
    let promise = new Promise<IntCurrency[]>((resolve, reject) => {
      let values: IntCurrency[] = [];
      this.http.get('https://api.exchangeratesapi.io/latest?base=' + base + '&symbols=' + symbol)
      .toPromise()
      .then( (response) => {
        const rates = JSON.stringify(response['rates']);
        let divisor = rates.split('"');
        for (let index = 1; index < divisor.length; index+=2) {
          let resultado = {
            name: divisor[index],
            value: response['rates'][divisor[index]]
          }
          values.push(resultado);
        }
        resolve(values as IntCurrency[]);
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }
}
