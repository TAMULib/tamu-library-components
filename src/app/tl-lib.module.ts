import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { WvrLibModule } from '@wvr/elements';
import { TamuHeaderComponent } from './tl-header/tl-header.component';
import { TamuItWorksComponent } from './tl-it-works/tl-it-works.component';
import { TamuNavListComponent } from './tl-nav-list/tl-nav-list.component';

const elements = [
  { component: TamuItWorksComponent, selector: 'tl-it-works' },
  { component: TamuHeaderComponent, selector: 'tl-header' },
  { component: TamuNavListComponent, selector: 'tl-nav-list' }
];

const components = [
  TamuItWorksComponent,
  TamuHeaderComponent,
  TamuNavListComponent
];

@NgModule({
  imports: [
    BrowserModule,
    WvrLibModule
  ],
  exports: [
    ...components
  ],
  providers: [],
  declarations: [
    ...components
  ],
  bootstrap: [],
  entryComponents: [
    ...components
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TamuLibModule {

  constructor(injector: Injector) {
    elements.forEach((element) => {
      try {
        customElements.define(element.selector, createCustomElement(element.component, { injector }));
      } catch (e) {
        console.warn(e);
      }
    });
  }

  ngDoBootstrap() {

  }

}
