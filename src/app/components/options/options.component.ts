import { Component, Input, OnInit } from '@angular/core';
import { optionItem } from 'src/app/models/optionItem';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent{


  @Input() optionItem: optionItem;

  constructor() { }



}
