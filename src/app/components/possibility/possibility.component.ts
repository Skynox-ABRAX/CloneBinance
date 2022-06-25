import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { possibilityItem } from 'src/app/models/possibilityItem';

@Component({
  selector: 'app-possibility',
  templateUrl: './possibility.component.html',
  styleUrls: ['./possibility.component.scss']
})
export class PossibilityComponent {

  @ViewChild('img', {read: ElementRef}) img: ElementRef;
  @Input() possibilityItem: possibilityItem;

  constructor() { }

  ngAfterViewInit(): void {

    if(this.possibilityItem.order == 2){

      this.img.nativeElement.classList.add('order2');

    }
  }




}
