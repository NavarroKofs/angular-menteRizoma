import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SubscribableOrPromise} from 'rxjs';
import { Router, RouterModule } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private http: HttpClient,  private routes: Router) {
    this.http = http;
  }

  sign = (data) => {
    let promise = new Promise ((resolve, reject) => {      
      this.http.post<any>('/api/v1/singIn', {
        "email": data['email'],
        "password": data['password']
      })
      .toPromise()
      .then( (response) => {
        if(!response['lError']){
          this.routes.navigate(['/acceso']);
        }else{
          alert('Algo saió mal, vuelva a intentarlo'); 
        }
      }, (error) => {
        reject(error);
      })
    });
    return promise;
  }
}
