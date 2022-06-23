import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OptionsComponent } from './components/options/options.component';
import { PossibilityComponent } from './components/possibility/possibility.component';
import { MoreComponent } from './components/more/more.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfosComponent } from './components/infos/infos.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HtmlPipe } from './pipes/html.pipe';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ItemOverlayComponent } from './components/item-overlay/item-overlay.component';
import { Overlay2Component } from './components/overlay2/overlay2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionsComponent,
    PossibilityComponent,
    MoreComponent,
    FooterComponent,
    InfosComponent,
    CryptoComponent,
    HtmlPipe,
    OverlayComponent,
    ItemOverlayComponent,
    Overlay2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
