import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TamuItWorksModule } from './tamu-it-works/tamu-it-works.module';

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
