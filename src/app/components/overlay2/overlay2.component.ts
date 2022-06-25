import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay2',
  templateUrl: './overlay2.component.html',
  styleUrls: ['./overlay2.component.scss']
})
export class Overlay2Component {

  
  @Output() touch= new EventEmitter();

  constructor() { }


  openClose(){

    this.touch.emit();
  }

}
