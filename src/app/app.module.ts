import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CryptosComponent } from './components/cryptos/cryptos.component';
import { OptionsComponent } from './components/options/options.component';
import { PossibilityComponent } from './components/possibility/possibility.component';
import { MoreComponent } from './components/more/more.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptosComponent,
    OptionsComponent,
    PossibilityComponent,
    MoreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }