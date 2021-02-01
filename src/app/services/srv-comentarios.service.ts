import { Injectable } from '@angular/core';
import { SubscribableOrPromise } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { IntComentario } from '../interfaces/int-comentario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvComentariosService {
  constructor(private http: HttpClient, private routes: Router) {
    this.http = http;
  }

  getAll = (noticeId: String): Promise<IntComentario[]> => {
    let promise = new Promise<IntComentario[]>((resolve, reject) => {
      let comentarios: IntComentario[] = [];
      this.http.get(`/api/v1/comment/${noticeId}`)
        .toPromise()
        .then((response) => {
          for (let index = 0; index < response['data'].length; index++) {
            let comentario = this.generateResultado(
              response['data'][index]['id'],
              response['data'][index]['userId'],
              response['data'][index]['author'],
              response['data'][index]['comment'],
              response['data'][index]['isEdited'],
              response['data'][index]['isDeleted']);

            comentarios.push(comentario as IntComentario);
          }

          resolve(comentarios as IntComentario[]);
        }, (error) => {
          reject(error);
        })
    });
    return promise;
  }

  deleteComment = (commentId: string) => {
    let userToken = localStorage.getItem('userToken');
    let userId = localStorage.getItem('userId');
    let promise = new Promise((resolve, reject) => {
      this.http.delete(`/api/v1/comment/${commentId}?userId=${userId}`,{ headers: {'token': userToken} })
      .toPromise()
      .then((response) => {    
          window.location.reload();
          localStorage.setItem('userToken', response['cToken']);
      }, (error) => {
        console.log(error);
        
        reject(error);
      });
    });
    return promise;
  }
  
  editComment = (commentContent: string, commentId: string) => {
    let userId = localStorage.getItem('userId');
    let userToken = localStorage.getItem('userToken');

    let promise = new Promise((resolve, reject) => {
      this.http.put(`/api/v1/comment/${commentId}`, 
      {
        "userId": userId,
        "comment": commentContent
      }
      , { headers: {'token': userToken} })
        .toPromise()
        .then((response) => {          
          console.log(response)
          localStorage.setItem('userToken', response['cToken']);
          window.location.reload();
        }, (error)=>{
          console.log(error);
          
        });
    });
  }

  newComment = (commentContent: string, noticeId: string) => {
    let userToken = localStorage.getItem('userToken');
    let userId = localStorage.getItem('userId');
    let user = localStorage.getItem('userName');

    let promise = new Promise((resolve, reject) => {
      this.http.post<any>(`/api/v1/comment`, 
      {
        "pubId": noticeId,
        "userId": userId,
        "comment": commentContent,
        "usuario": user
      }
      , { headers: {'token': userToken} })
        .toPromise()
        .then((response) => {
          if(!response['lError']){
            //localStorage.setItem('userToken', response['cToken']);
            window.location.reload();
          }else{
            console.log(response);
            alert("Algo salió mal");
          }
        }, (error) => {
          console.log(error);
          alert("Debe iniciar sesión para comentar")
        })
    });
    return promise;
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
