import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WvrSharedModule } from '@wvr/elements';
import { TlAlertComponent } from '../tl-alert/tl-alert.component';
import { TlButtonComponent } from '../tl-button/tl-button.component';
import { TlCardComponent } from '../tl-card/tl-card.component';
import { TlDropDownComponent } from '../tl-drop-down/tl-drop-down.component';
import { TamuFooterComponent } from '../tl-footer/tl-footer.component';
import { TamuHeaderComponent } from '../tl-header/tl-header.component';
import { TlIconComponent } from '../tl-icon/tl-icon.component';
import { TamuItWorksComponent } from '../tl-it-works/tl-it-works.component';
import { TlMegaMenuSectionComponent } from '../tl-mega-menu/tl-mega-menu-section/tl-mega-menu-section.component';
import { TlMegaMenuComponent } from '../tl-mega-menu/tl-mega-menu.component';
import { TlModalComponent } from '../tl-modal/tl-modal.component';
import { TamuNavListComponent } from '../tl-nav-list/tl-nav-list.component';
import { TlTabComponent } from '../tl-tabs/tl-tab/tl-tab.component';
import { TlTabsComponent } from '../tl-tabs/tl-tabs.component';
import { TlThemesComponent } from '../tl-themes/tl-themes.component';
import { TlWysiwygComponent } from '../tl-wysiwyg/tl-wysiwyg.component';

/** This property contains a list of components classes. */
export const TL_COMPONENTS = [
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
  TlModalComponent,
  TamuNavListComponent,
  TlTabsComponent,
  TlTabComponent,
  TlThemesComponent,
  TlWysiwygComponent
];

export const TL_PIPES = [];

const MODULES = [
  CommonModule,
  WvrSharedModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...TL_COMPONENTS,
    ...TL_PIPES
  ],
  declarations: [
    ...TL_COMPONENTS,
    ...TL_PIPES
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TLSharedModule { }
