import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SubscribableOrPromise} from 'rxjs';
import { Router, RouterModule } from '@angular/router'; 
import { IntBusqueda } from '../interfaces/int-busqueda'
import { IntComentario } from '../interfaces/int-comentario';

@Injectable({
  providedIn: 'root'
})
export class SrvComentariosService {
  constructor(private http: HttpClient,  private routes: Router) {
    this.http = http;
  }

  getAll = (data) => {
    let promise = new Promise ((resolve, reject) => {
      this.http.get(`/api/v1/comment/${data['noticeId']}`)
      .toPromise()
      .then( (response) => {
        resolve(response as IntComentario[]);
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }
}
