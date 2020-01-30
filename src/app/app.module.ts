import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TamuItWorksModule } from './tl-it-works/tl-it-works.module';
import { TamuHeaderModule } from './tl-header/tl-header.module';
import { TamuNavListModule } from './tl-nav-list/tl-nav-list.module';

import { WvrNavListModule } from 'wvr-elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    TamuItWorksModule,
    TamuHeaderModule,
    WvrNavListModule,
    TamuNavListModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() { }
}
