import { Injectable } from '@angular/core';
import { IntBusqueda } from '../interfaces/int-busqueda'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscribableOrPromise } from 'rxjs';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SrvBusquedaService {

  /*cachedValues: Array<{
    [url: string]: IntBbc
  }> = [];*/

  urlImgNotFound = "https://uploads-ssl.webflow.com/5d6ed3ec5fd0246da423f7a8/5dcc3ae6e62de1121a4aab86_no-disponible-7448e295ce0d80db8b02f2e8e09c6148ecbd626418792e792d0195e8c26851b9.png";
  urlImgNotFoundAnmo = "https://www.anmosugoi.com/wp-content/uploads/2019/10/sugoi-perfil-octubre.jpg";
  urls = {
    bbc: {
      id: "bbc"
    },
    reforma: {
      id: "reforma"
    },
    kudasai: {
      id: "somoskudasai"
    },
    anmo: {
      id: "anmosugoi"
    },
    musica: {
      id: "hoy.es"
    },
    deportes: {
      id: "espn"
    }
  }

  constructor(private http: HttpClient) {
    this.http = http
  }

  busquedaFederada = (urls: any[]): Promise<IntBusqueda[]> => {
    let listaResultados: IntBusqueda[];
    listaResultados = [];
    let listaBbc: IntBusqueda[];
    listaBbc = [];
    let listaReforma: IntBusqueda[];
    listaReforma = [];
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
            'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Content-Type': 'application/json'
          })
        };
        let urlName = urls[index];
        let name = this.urls[urlName]["id"];
        this.http.get('/api/v1/publications?source=' + name, httpOptions)
          .toPromise()
          .then((response) => {
            let resultado = {}
            let respuesta = [];
            switch (urlName) {
              case "bbc":
                respuesta = response['data'];
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  let image = this.urlImgNotFound;
                  try {
                    image = respuesta[aux].image;
                  } catch (error) {
                    image = this.urlImgNotFound;
                  }
                  if (image == undefined) {
                    image = this.urlImgNotFound;
                  }
                  resultado = this.generateResultado(respuesta[aux].id, "bbc", respuesta[aux].title, respuesta[aux].url, image, respuesta[aux].description);
                  listaBbc.push(resultado as IntBusqueda);
                }
                break;
              case "reforma":
                respuesta = response['data'];
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  let image = this.urlImgNotFound;
                  try {
                    image = respuesta[aux].image;
                  } catch (error) {
                    image = this.urlImgNotFound;
                  }
                  if (image == undefined) {
                    image = this.urlImgNotFound;
                  }
                  resultado = this.generateResultado(respuesta[aux].id, "reforma", respuesta[aux].title, respuesta[aux].url, image, respuesta[aux].description);
                  listaReforma.push(resultado as IntBusqueda);
                }
                break;
              case "kudasai":
                respuesta = response['data'];
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  let image = this.urlImgNotFound;
                  try {
                    image = respuesta[aux].image;
                  } catch (error) {
                    image = this.urlImgNotFound;
                  }
                  if (image == undefined) {
                    image = this.urlImgNotFound;
                  }
                  resultado = this.generateResultado(respuesta[aux].id, "kudasai", respuesta[aux].title, respuesta[aux].url, image, respuesta[aux].description);
                  listaKudasai.push(resultado as IntBusqueda);
                }
                break;
              case "anmo":
                respuesta = response['data'];
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  let image = this.urlImgNotFound;
                  try {
                    image = respuesta[aux].image;
                  } catch (error) {
                    image = this.urlImgNotFound;
                  }
                  if (image == undefined) {
                    image = this.urlImgNotFound;
                  }
                  resultado = this.generateResultado(respuesta[aux].id, "anmo", respuesta[aux].title, respuesta[aux].url, image, respuesta[aux].description);
                  listaAnmo.push(resultado as IntBusqueda);
                }
                break;
              case "musica":
                respuesta = response['data'];
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  let image = this.urlImgNotFound;
                  try {
                    image = respuesta[aux].image;
                  } catch (error) {
                    image = this.urlImgNotFound;
                  }
                  if (image == undefined) {
                    image = this.urlImgNotFound;
                  }
                  resultado = this.generateResultado(respuesta[aux].id, "hoy.es", respuesta[aux].title, respuesta[aux].url, image, respuesta[aux].description);
                  listaMusica.push(resultado as IntBusqueda);
                }
                break;
              case "deportes":
                respuesta = response['data'];
                numFeeds.push((respuesta).length);
                for (let aux = 0; aux < (respuesta).length; aux++) {
                  let image = this.urlImgNotFound;
                  try {
                    image = respuesta[aux].image;
                  } catch (error) {
                    image = this.urlImgNotFound;
                  }
                  if (image == undefined) {
                    image = this.urlImgNotFound;
                  }
                  resultado = this.generateResultado(respuesta[aux].id, "espn", respuesta[aux].title, respuesta[aux].url, image, respuesta[aux].description);
                  listaDeportes.push(resultado as IntBusqueda);
                }
                break;
              default:
                break;
            }
            this.sleep(1000);
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
              
              resolve(listaResultados as IntBusqueda[]);
            }
          }, (error) => {
            reject(error);
          })
      }
    });
    return promesa;
  }

  getNotice = (id: string): Promise<IntBusqueda> => {
    let resultado = {};
    let promesa = new Promise<IntBusqueda>((resolve, reject) => {
      this.http.get(`/api/v1/publication/${id}`)
      .toPromise()
      .then((response) => {
        let notice = response['data'][0];
        resultado = this.generateResultado(notice.id, notice.source, notice.name, "", notice.img, notice.description);
        resolve(resultado as IntBusqueda);
      }, (error) => {
        console.log(error)
        reject(error);
      });
    });
    return promesa;
  }

  serchNotice = (query: string): Promise<any> =>{    
    let resultado = [];
    let promesa = new Promise<IntBusqueda[]>((resolve, reject) => {
      this.http.get(`/api/v1/search?query=${query}`)
      .toPromise()
      .then((response) => {
        console.log(response);
        response['data'].forEach(notice => {
          resultado.push(this.generateResultado(notice.id, notice.source, notice.name, "", notice.img, notice.description));
        });
        resolve(resultado as IntBusqueda[]);
      }).catch(function(error) {
        resolve(resultado as IntBusqueda[]);
        }
      );
    });
    
    return promesa;
  }

  private aleatorizarResultados = (arr1: IntBusqueda[]) => {
    arr1.sort(function () { return Math.random() - 0.5 });
    return arr1;
  }

  private generateResultado = (noticeId: string, source: string, title: string, url: string, image: string, description: string) => {
    let resultado = {
      noticeId: "",
      source: "",
      title: "",
      url: "",
      image: "",
      description: ""
    }
    resultado.noticeId = noticeId;
    resultado.source = source;
    resultado.title = title;
    resultado.url = url;
    resultado.image = image;
    resultado.description = this.eliminarHtml(description);
    return resultado;
  }

  private sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private eliminarHtml(cadena) {
    return cadena.replace(/<\/?[^>]+>/gi, '');
  }
}
