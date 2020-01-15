import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TamuItWorksModule } from './tl-it-works/tl-it-works.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    TamuItWorksModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  ngDoBootstrap() {}
}
