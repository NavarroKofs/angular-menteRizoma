import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.logo = "../../images/logo-mente-rizoma.png";
  }

}
