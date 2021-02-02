import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SubscribableOrPromise} from 'rxjs';
import { Router, RouterModule } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class SrvRpServiceService {

  constructor(private http: HttpClient,  private routes: Router) {
    this.http = http;
  }

  recuperar = (data) => {
    let promise = new Promise ((resolve, reject) => {
      this.http.post<any>('/api/v1/resetPassword', {
        "email": data['user'],
      })
      .toPromise()
      .then( (response) => {
        alert(response['cError']);
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }

  reestablecer = (data) => {
    let promise = new Promise ((resolve, reject) => {
      this.http.put<any>('/api/v1/resetPassword', {
        "email": data['email'],
        "code": data['code'],
        "password": data['password']
      })
      .toPromise()
      .then( (response) => {
        alert(response['cError']);
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }
}
