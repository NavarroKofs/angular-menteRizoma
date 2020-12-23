import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;

  constructor(private route: ActivatedRoute, router: Router) { }

  isCollapse = true;
  toggleState() {
    let foo = this.isCollapse
    this.isCollapse = foo === false ? true : false;
  }
  loggedIn = false;
  loggedUser:any = null;

  ngOnInit(): void {
    this.logo = "../../images/logo-mente-rizoma.png";
  }

}
