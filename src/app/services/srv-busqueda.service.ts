import { Injectable } from '@angular/core';
import { IntBusqueda } from '../interfaces/int-busqueda'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SubscribableOrPromise} from 'rxjs';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SrvBusquedaService {

  /*cachedValues: Array<{
    [url: string]: IntBbc
  }> = [];*/

   urls = {
    bbc: {
      url: "https://www.bbc.com/mundo/ultimas_noticias/index.xml"
    },
    reforma: {
      url: "https://www.reforma.com/rss/portada.xml"
    },
    kudasai: {
      url: "https://somoskudasai.com/feed/"
    },
    anmo: {
      url: "https://www.anmosugoi.com/feed/"
    },
    musica: {
      url: "https://www.hoy.es/rss/2.0/?section=culturas/musica"
    },
    deportes: {
      url: "https://www.espn.com.mx/espn/rss/news"
    }
  }

  constructor(private http: HttpClient) {
    this.http = http
  }

  /*busqueda = (url: string): Promise<IntBusqueda> => {
    let promise = new Promise<IntBusqueda>((resolve, reject) => {
        if (this.cachedValues[url]) {
          resolve(this.cachedValues[url])
        } else {
          const httpOptions = {
            headers: new HttpHeaders({ 
              'Access-Control-Allow-Origin':'http://localhost:4200/', 'Content-Type': 'application/json'
            })
          };
          this.http.get('/xml-to-json/?xml=' + url, httpOptions)
            .toPromise()
            .then( (response) => {
              //resolve(response["rss"].channel.item[0]);
              resolve(response as IntBusqueda)
            }, (error) => {
              reject(error);
            })
        }
    })
    return promise;
  }*/

  busquedaFederada = (urls: any[]): Promise<IntBusqueda[]> => {
    let listaResultados: IntBusqueda[];
    listaResultados = [];
    let listaBbc: IntBusqueda[];
    listaBbc = [];
    let listaReforma: IntBusqueda[];
    listaReforma =  [];
    let listaKudasai: IntBusqueda[];
    listaKudasai = [];
    let listaAnmo: IntBusqueda[];
    listaAnmo = [];
    let listaMusica: IntBusqueda[];
    listaMusica = [];
    let listaDeportes: IntBusqueda[];
    listaDeportes = [];
    let numFeeds = [];

    let promesa = new Promise<IntBusqueda[]>((resolve, reject) => {
      for (let index = 0; index < urls.length; index++) {
          const httpOptions = {
            headers: new HttpHeaders({ 
              'Access-Control-Allow-Origin':'http://localhost:4200/', 'Content-Type': 'application/json'
            })
          };
          let urlName = urls[index];
          let url = this.urls[urlName]["url"];
          this.http.get('/xml-to-json/?xml=' + url, httpOptions)
          .toPromise()
          .then( (response) => {
            let resultado = {}
            let respuesta = [];
            switch (urlName) {
              case "bbc":
                respuesta = response["feed"].entry;
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  resultado = this.generateResultado("bbc", respuesta[aux].title, respuesta[aux].link['@href'], /*respuesta[aux].link['media:content']['media:thumbnail'][0]['@url']*/"", respuesta[aux].summary);
                  listaBbc.push(resultado as IntBusqueda);
                  //listaResultados.push(resultado as IntBusqueda);
                }
                break;
              case "reforma":
                respuesta = response["rss"].channel.item;
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  resultado = this.generateResultado("reforma", respuesta[aux].title, respuesta[aux].link, respuesta[aux].enclosure, respuesta[aux].description);
                  listaReforma.push(resultado as IntBusqueda);
                  //listaResultados.push(resultado as IntBusqueda);
                }
              break;
              case "kudasai":
                respuesta = response["rss"].channel.item;
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  resultado = this.generateResultado("somoskudasai", respuesta[aux].title, respuesta[aux].link, "", respuesta[aux].description);
                  listaKudasai.push(resultado as IntBusqueda);
                  //listaResultados.push(resultado as IntBusqueda);
                }
                break;
              case "anmo":
                respuesta = response["rss"].channel.item;
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  resultado = this.generateResultado("anmosugoi", respuesta[aux].title, respuesta[aux].link, "", respuesta[aux].description);
                  listaAnmo.push(resultado as IntBusqueda);
                  //listaResultados.push(resultado as IntBusqueda);
                }
                break;
              case "musica":
                respuesta = response["rss"].channel.item;
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  /*let description = respuesta[aux].description;
                  let divisor = description.split('<img align=\"left\" src=\"');
                  divisor = divisor[1].split('\"/>\n');
                  let imagen = divisor[0];
                  description = divisor[1];*/
                  resultado = this.generateResultado("hoy.es", respuesta[aux].title, respuesta[aux].link, "", respuesta[aux].description);
                  listaMusica.push(resultado as IntBusqueda);
                  //listaResultados.push(resultado as IntBusqueda);
                }
                break;
              case "deportes":
                respuesta = response["rss"].channel.item;
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  resultado = this.generateResultado("espn", respuesta[aux].title, respuesta[aux].link, respuesta[aux].image, respuesta[aux].description);
                  listaDeportes.push(resultado as IntBusqueda);
                  //listaResultados.push(resultado as IntBusqueda);
                }
                break;
              default:
                break;
            }
            if (index == (urls.length - 1)) {
              let numItems = Math.max(listaAnmo.length, listaBbc.length, listaDeportes.length, listaKudasai.length, listaMusica.length, listaReforma.length);
          
              for (let contador = 0; contador < numItems; contador++) {
                if (listaBbc[contador]) {
                  listaResultados.push(listaBbc[contador])
                }
                if (listaAnmo[contador]) {
                  listaResultados.push(listaAnmo[contador])
                }
                if (listaDeportes[contador]) {
                  listaResultados.push(listaDeportes[contador])
                }
                if (listaKudasai[contador]) {
                  listaResultados.push(listaKudasai[contador])
                }
                if (listaMusica[contador]) {
                  listaResultados.push(listaMusica[contador])
                }
                if (listaReforma[contador]) {
                  listaResultados.push(listaReforma[contador])
                }
              }
              //listaResultados = this.aleatorizarResultados(listaResultados);
              resolve(listaResultados as IntBusqueda[]);
            }
          }, (error) => {
            reject(error);
          })
      }
    });
    return promesa;
  }

  private aleatorizarResultados = (arr1: IntBusqueda[]) => {
    arr1.sort(function() { return Math.random() - 0.5 });
    return arr1;
  }

  private generateResultado = (source: string, title:string, url:  string, image: string, description: string) => {
    let resultado = {
      source: "",
      title: "",
      url: "",
      image: "",
      description: ""
    }
    resultado.source = source;
    resultado.title = title;
    resultado.url = url;
    resultado.image = image;
    resultado.description = description;
    return resultado;
  }

}
