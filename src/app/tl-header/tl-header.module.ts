import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { TamuHeaderComponent } from './tl-header.component';

import { WvrHeaderModule, WvrNavListModule } from 'wvr-elements';

@NgModule({
  imports: [BrowserModule, WvrHeaderModule],
  exports: [],
  providers: [],
  declarations: [TamuHeaderComponent],
  bootstrap: [],
  entryComponents: [TamuHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TamuHeaderModule {
  constructor(injector: Injector) {
    const TamuHeaderElement = createCustomElement(TamuHeaderComponent, { injector });
    customElements.define('tl-header', TamuHeaderElement);
  }
}