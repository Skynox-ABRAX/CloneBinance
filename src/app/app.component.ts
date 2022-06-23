import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ResourcesService } from './services/resources.service';
import { advice, section_header, more, options, possibility, hero, infos, crypto, overlay} from '../app/models/resources'
import { footer_header } from '../app/models/resources'
import { footerItem } from './models/footerItem';
import { moreItem } from './models/moreItem';
import { optionItem } from './models/optionItem';
import { sectionItem } from './models/sectionItem';
import { possibilityItem } from './models/possibilityItem';
import { heroItem } from './models/heroItem';
import { infoItem } from './models/infoItem';
import { cryptoItem } from './models/cryptoItem';
import { overlayItem } from './models/overlayItem';
import { Overlay2Component } from './components/overlay2/overlay2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('overlay2', { read: ElementRef}) overlay2: ElementRef;


  section:sectionItem[];
  footer_detail: footerItem[];
  advice: string = advice
  mores: moreItem[];
  options: optionItem[];
  possibilities: possibilityItem[];
  heroes: heroItem[];
  infos: infoItem[];
  cryptos: cryptoItem[];


  section_header = section_header;

  constructor(){

    this.section = section_header.map(a => new sectionItem(a.imageUrl, a.title, a.description, a.link));
    this.footer_detail = footer_header.map( a => new footerItem(a.title, a.list));
    this.mores = more.map( a => new moreItem(a.imageURL, a.title, a.description, a.more));
    this.options = options.map( a => new optionItem(a.imageURL, a.title, a.description));
    this.possibilities = possibility.map( a => new possibilityItem(a.imageURL, a.title, a.description, a.order));
    this.heroes = hero.map( a => new heroItem(a.title, a.description));
    this.infos = infos.map( a => new infoItem(a.imageUrl, a.title, a.description));
    this.cryptos = crypto.map( a => new cryptoItem(a.imageURL, a.title, a.crypto, a.lastPrice, a.variation, a.capitalisation));



    console.log("footer", this.footer_detail);
    console.log("more", this.mores);

  }

  ngOnInit(): void {
 
    
  }

  openClose(){



      this.overlay2.nativeElement.classList.toggle('move');


      

  }



}


