import { Component, Inject } from '@angular/core';
import { ResourcesService } from './services/resources.service';
import { advice, section_header, more, options, possibility} from '../app/models/resources'
import { footer_header } from '../app/models/resources'
import { footerItem } from './models/footerItem';
import { moreItem } from './models/moreItem';
import { optionItem } from './models/optionItem';
import { sectionItem } from './models/sectionItem';
import { possibilityItem } from './models/possibilityItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  section:sectionItem[];
  footer_detail: footerItem[];
  advice: string = advice
  mores: moreItem[];
  options: optionItem[];
  possibilities: possibilityItem[];

  section_header = section_header;

  constructor(){

    this.section = section_header.map(a => new sectionItem(a.imageUrl, a.title, a.description));
    this.footer_detail = footer_header.map( a => new footerItem(a.title, a.list));
    this.mores = more.map( a => new moreItem(a.imageURL, a.title, a.description, a.more));
    this.options = options.map( a => new optionItem(a.imageURL, a.title, a.description));
    this.possibilities = possibility.map( a => new possibilityItem(a.imageURL, a.title, a.description));

    console.log("footer", this.footer_detail);
    console.log("more", this.mores);

  }



}


