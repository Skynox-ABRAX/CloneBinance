import { Component, Input, OnInit } from '@angular/core';
import { moreItem } from 'src/app/models/moreItem';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent {

  @Input() moreItem: moreItem;

  constructor() { }

}
