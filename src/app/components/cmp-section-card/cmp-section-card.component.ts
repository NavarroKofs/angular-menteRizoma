import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IntBusqueda } from "../../interfaces/int-busqueda";

@Component({
  selector: 'cmp-section-card',
  templateUrl: './cmp-section-card.component.html',
  styleUrls: ['./cmp-section-card.component.css']
})
export class CmpSectionCardComponent implements OnInit {

  @Input ('card') card: IntBusqueda; 
  @Input ('i') i: number;

  //isvisibleArray
  isVisibleArray: boolean[];

  constructor() {
    this.isVisibleArray = [];
  }

  ngOnInit(): void {
  }

  activateHover($event){
    this.isVisibleArray[$event.target.id] = true;
   }
   disableHover($event){
    this.isVisibleArray[$event.target.id] = false;
   }
   disableAllHover(){
    for (const desc in this.isVisibleArray) {
      this.isVisibleArray[desc] = false;
    }
   }

}
