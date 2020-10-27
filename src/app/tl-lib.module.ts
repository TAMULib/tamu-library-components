import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { WvrLibModule } from '@wvr/elements';
import { TlAlertComponent } from './tl-alert/tl-alert.component';
import { TlButtonComponent } from './tl-button/tl-button.component';
import { TlCardComponent } from './tl-card/tl-card.component';
import { TlDropDownComponent } from './tl-drop-down/tl-drop-down.component';
import { TamuFooterComponent } from './tl-footer/tl-footer.component';
import { TamuHeaderComponent } from './tl-header/tl-header.component';
import { TlIconComponent } from './tl-icon/tl-icon.component';
import { TamuItWorksComponent } from './tl-it-works/tl-it-works.component';
import { TlMegaMenuSectionComponent } from './tl-mega-menu/tl-mega-menu-section/tl-mega-menu-section.component';
import { TlMegaMenuComponent } from './tl-mega-menu/tl-mega-menu.component';
import { TamuNavListComponent } from './tl-nav-list/tl-nav-list.component';
import { TlPanelComponent } from './tl-panel/tl-panel.component';
import { TlTabsComponent } from './tl-tabs/tl-tabs.component';
import { TlTabComponent } from './tl-tabs/tl-tab/tl-tab.component';

/** This property contains a list of TAMU components and the selector tags. */
const elements = [
  { component: TlAlertComponent, selector: 'tl-alert' },
  { component: TlButtonComponent, selector: 'tl-button' },
  { component: TlCardComponent, selector: 'tl-card' },
  { component: TlDropDownComponent, selector: 'tl-drop-down' },
  { component: TamuFooterComponent, selector: 'tl-footer' },
  { component: TamuHeaderComponent, selector: 'tl-header' },
  { component: TlIconComponent, selector: 'tl-icon' },
  { component: TamuItWorksComponent, selector: 'tl-it-works' },
  { component: TlMegaMenuComponent, selector: 'tl-mega-menu' },
  { component: TlMegaMenuSectionComponent, selector: 'tl-mega-menu-section' },
  { component: TamuNavListComponent, selector: 'tl-nav-list' },
  { component: TlPanelComponent, selector: 'tl-panel' },
  { component: TlTabsComponent, selector: 'tl-tabs' },
  { component: TlTabComponent, selector: 'tl-tab' }
];

/** This property contains a list of TAMU components classes. */
const components = [
  TlAlertComponent,
  TlButtonComponent,
  TlCardComponent,
  TlDropDownComponent,
  TamuFooterComponent,
  TamuHeaderComponent,
  TamuItWorksComponent,
  TlIconComponent,
  TlMegaMenuComponent,
  TlMegaMenuSectionComponent,
  TamuNavListComponent,
  TlPanelComponent,
  TlTabsComponent,
  TlTabComponent
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

  constructor(private readonly injector: Injector) {

  }

  ngDoBootstrap(): void {
    elements.forEach(element => {
      try {
        customElements.define(element.selector, createCustomElement(element.component, {
          injector: this.injector
         }));
      } catch (e) {
        console.warn(e);
      }
    });
  }

}
