import { Component, OnInit } from '@angular/core';
import { header_left, header_right } from 'src/app/models/resources';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header_left: string[]=header_left;
  header_right: string[]=header_right;


  constructor() { }

  ngOnInit(): void {
  }

}
