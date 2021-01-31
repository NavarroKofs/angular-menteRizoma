import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SubscribableOrPromise} from 'rxjs';
import { Router, RouterModule } from '@angular/router'; 
import { IntComentario } from '../interfaces/int-comentario';

@Injectable({
  providedIn: 'root'
})
export class SrvComentariosService {
  constructor(private http: HttpClient,  private routes: Router) {
    this.http = http;
  }

  getAll = (noticeId: String): Promise<IntComentario[]> => {
    let promise = new Promise<IntComentario[]> ((resolve, reject) => {
      let comentarios: IntComentario[] = [];
      this.http.get(`/api/v1/comment/${noticeId}`)
      .toPromise()
      .then( (response) => {   
        for (let index = 0; index < response['data'].length; index++) {
          let comentario = this.generateResultado(
            response['data'][index]['id'],
            response['data'][index]['userId'],
            response['data'][index]['author'],
            response['data'][index]['comment'],
            response['data'][index]['isEdited'],
            response['data'][index]['isDeleted']);
            
            comentarios.push(comentario as IntComentario );
        }
        
        resolve(comentarios as IntComentario[]);
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }

  deleteComment = (commentId: string): void =>{
    this.http.delete(`/api/v1/comment/${commentId}`)
      .toPromise()
      .then( (response) => {
        window.location.reload();
      });
  }

  private generateResultado = (commentId: string, userId: string, author: string, comment: string, isEdited: number, isDeleted: number) => {
    let resultado = {
      commentId: "",
      userId: "",
      author: "",
      comment: "",
      isEdited: 0,
      isDeleted: 0
    }
    resultado.commentId = commentId;
    resultado.userId = userId;
    resultado.author = author;
    resultado.comment = comment;
    resultado.isEdited = isEdited;
    resultado.isDeleted = isDeleted;
    return resultado;
  }
}
