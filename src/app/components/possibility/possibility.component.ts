import { Component, Input, OnInit } from '@angular/core';
import { possibilityItem } from 'src/app/models/possibilityItem';

@Component({
  selector: 'app-possibility',
  templateUrl: './possibility.component.html',
  styleUrls: ['./possibility.component.scss']
})
export class PossibilityComponent implements OnInit {


  @Input() possibilityItem: possibilityItem;

  constructor() { }

  ngOnInit(): void {
  }

}
