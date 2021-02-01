import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SubscribableOrPromise} from 'rxjs';
import { Router, RouterModule } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient,  private routes: Router) {
    this.http = http;
  }

  login = (data) => {
    let promise = new Promise ((resolve, reject) => {
      this.http.post<any>('/api/v1/login', {
        "email": data['user'],
        "password": data['password']
      })
      .toPromise()
      .then( (response) => {
        if(!response['lError']){
          localStorage.setItem('userToken',response['cToken']);
          localStorage.setItem('userId',response['id']);
          localStorage.setItem('userName',response['username']);
          this.routes.navigate(['/'])
        }else{
          alert('El usuario no existe');
        }
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }
}
