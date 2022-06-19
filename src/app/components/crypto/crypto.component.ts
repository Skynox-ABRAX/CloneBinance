import { Component, Input, OnInit } from '@angular/core';
import { cryptoItem } from 'src/app/models/cryptoItem';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  @Input() cryptoItem: cryptoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
