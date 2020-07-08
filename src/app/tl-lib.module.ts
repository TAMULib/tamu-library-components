import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { WvrLibModule } from '@wvr/elements';
import { TlButtonComponent } from './tl-button/tl-button.component';
import { TlDropDownComponent } from './tl-drop-down/tl-drop-down.component';
import { TamuFooterComponent } from './tl-footer/tl-footer.component';
import { TamuHeaderComponent } from './tl-header/tl-header.component';
import { TamuItWorksComponent } from './tl-it-works/tl-it-works.component';
import { TamuNavListComponent } from './tl-nav-list/tl-nav-list.component';

/** This property contains a list of TAMU components and the selector tags. */
const elements = [
  { component: TlButtonComponent, selector: 'tl-button' },
  { component: TlDropDownComponent, selector: 'tl-drop-down' },
  { component: TamuFooterComponent, selector: 'tl-footer' },
  { component: TamuItWorksComponent, selector: 'tl-it-works' },
  { component: TamuHeaderComponent, selector: 'tl-header' },
  { component: TamuNavListComponent, selector: 'tl-nav-list' }
];

/** This property contains a list of TAMU components classes. */
const components = [
  TlButtonComponent,
  TlDropDownComponent,
  TamuFooterComponent,
  TamuItWorksComponent,
  TamuHeaderComponent,
  TamuNavListComponent
];

/** The main module for the TAMU Compnent library. */
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
    elements.forEach(element => {
      try {
        customElements.define(element.selector, createCustomElement(element.component, { injector }));
      } catch (e) {
        console.warn(e);
      }
    });
  }

  ngDoBootstrap(): void {
    // OVERRIDE
  }

}
