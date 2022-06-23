import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { overlayItem } from 'src/app/models/overlayItem';
import { header_left, header_right, overlay } from 'src/app/models/resources';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header_left: string[]=header_left;
  header_right: string[]=header_right;
  overlays: Array<overlayItem[]>

  @Output()  touch = new EventEmitter();
  


  constructor() { }

  ngOnInit(): void {

    this.overlays = overlay.map( a => a.map(item =>new overlayItem(item.svgPath, item.title, item.description, item.more)));

  }

  openClose($event:any){



    this.touch.emit();
    console.log('coucou');

  }

  

}
