import { Component, OnInit } from '@angular/core';
import { footer } from 'src/app/models/resources';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  footer: string;
  constructor() {

    this.footer = footer;
   }


}
