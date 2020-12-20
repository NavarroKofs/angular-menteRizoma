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

  values: IntCurrency[] = [];

  precioDolar = (): Promise<IntCurrency[]> => {
    let promise = new Promise<IntCurrency[]>((resolve, reject) => {
      this.http.get('https://api.exchangeratesapi.io/latest?base=USD')
      .toPromise()
      .then( (response) => {
        this.values.push(this.generateResultado(response.rates));
        resolve(response as IntCurrency[])
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
