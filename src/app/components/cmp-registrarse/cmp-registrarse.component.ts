import { Component, OnInit } from '@angular/core';
import { SignInService } from "../../services/sign-in.service";

@Component({
  selector: 'app-cmp-registrarse',
  templateUrl: './cmp-registrarse.component.html',
  styleUrls: ['./cmp-registrarse.component.css']
})
export class CmpRegistrarseComponent implements OnInit {
  constructor(private SignInService: SignInService) { }

  ngOnInit(): void {
  }

  signin = (data) =>{
    if(data['password1'] !== data['password2']){
      alert("Las contraseñas deben coincidir");
      return;
    }
    
    this.SignInService.sign({name: data['name'], email: data['mail'], password: data['password1']});
  }
}