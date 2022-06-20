import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { possibilityItem } from 'src/app/models/possibilityItem';

@Component({
  selector: 'app-possibility',
  templateUrl: './possibility.component.html',
  styleUrls: ['./possibility.component.scss']
})
export class PossibilityComponent implements OnInit {

  @ViewChild('img', {read: ElementRef}) img: ElementRef;
  @Input() possibilityItem: possibilityItem;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if(this.possibilityItem.order == 2){

      console.log(this.img);

      this.img.nativeElement.classList.add('order2');
      console.log('order', this.possibilityItem.order);

    }
  }




}
