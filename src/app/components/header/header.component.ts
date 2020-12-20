import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;

  constructor() { }

  ngOnInit(): void {
    this.logo = "../../images/logo-mente-rizoma.png";
  }

}
