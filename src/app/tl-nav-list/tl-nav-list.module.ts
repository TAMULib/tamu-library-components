import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { TamuNavListComponent } from './tl-nav-list.component';

import { WvrHeaderModule, WvrNavListModule } from 'wvr-elements';

@NgModule({
  imports: [BrowserModule, WvrNavListModule],
  exports: [],
  providers: [],
  declarations: [TamuNavListComponent],
  bootstrap: [],
  entryComponents: [TamuNavListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TamuNavListModule {
  constructor(injector: Injector) {
    const TamuNavListElement = createCustomElement(TamuNavListComponent, { injector });
    customElements.define('tl-nav-list', TamuNavListElement);
  }
}