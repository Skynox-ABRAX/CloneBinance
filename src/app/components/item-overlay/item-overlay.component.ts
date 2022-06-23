import { Component, Input, OnInit } from '@angular/core';
import { overlayItem } from 'src/app/models/overlayItem';

@Component({
  selector: 'app-item-overlay',
  templateUrl: './item-overlay.component.html',
  styleUrls: ['./item-overlay.component.scss']
})
export class ItemOverlayComponent implements OnInit {

  @Input() item : overlayItem;

  constructor() { }

  ngOnInit(): void {
  }

}
