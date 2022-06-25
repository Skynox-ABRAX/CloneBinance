import { Component, Input, OnInit } from '@angular/core';
import { infoItem } from 'src/app/models/infoItem';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {

  @Input() infoItem: infoItem;

  constructor() { }


}
