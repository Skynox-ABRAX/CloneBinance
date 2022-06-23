import { Component, Input, OnInit, Output } from '@angular/core';
import { overlayItem } from 'src/app/models/overlayItem';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() title:string;
  @Input() list: overlayItem[];


  constructor() { }

  ngOnInit(): void {
  }

}
