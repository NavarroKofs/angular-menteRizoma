import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-cmp-acceso',
  templateUrl: './cmp-acceso.component.html',
  styleUrls: ['./cmp-acceso.component.css'],
  providers: [LoginService]
})
export class AccesoComponent implements OnInit {
  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  login = (data) =>{
    this.LoginService.login({user: data['email'], password: data['password']});
  }
}
