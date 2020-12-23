import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-tiny-divisor',
  templateUrl: './cmp-tiny-divisor.component.html',
  styleUrls: ['./cmp-tiny-divisor.component.css']
})
export class CmpTinyDivisorComponent implements OnInit {

  uncracked: boolean;
  special: boolean;
  cracking: number;

  constructor() {
    var randNumber = Math.random();
    this.special = randNumber>.9;

    this.uncracked = true;
    this.cracking = 0;
  }

  ngOnInit(): void {
  }

  crack(){
    this.cracking++;
    this.uncracked = this.cracking<5;
  }

}
