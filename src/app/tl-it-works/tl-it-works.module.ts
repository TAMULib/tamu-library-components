import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { TamuItWorksComponent } from './tl-it-works.component';

import { ItWorksModule } from 'wvr-elements'; 

@NgModule({
  imports: [ BrowserModule, ItWorksModule ],
  exports: [],
  providers: [],
  declarations: [ TamuItWorksComponent ],
  bootstrap: [  ],
  entryComponents: [ TamuItWorksComponent ]
})
export class TamuItWorksModule {
  constructor(injector: Injector) {
    const TamuItWorksElement = createCustomElement(TamuItWorksComponent, {injector});
    customElements.define('tl-it-works', TamuItWorksElement);
  }
}