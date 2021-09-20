import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Optional, SkipSelf } from '@angular/core';
import { WvrColorPreviewComponent, WvrCoreModule, WvrElementDesc, WvrListComponent, WvrListItemComponent, WvrManifestComponent, WvrManifestEntryComponent, WvrNavLiComponent, WvrTextComponent, WvrThemeComponent } from '@wvr/elements';
import { TlAlertComponent } from '../tl-alert/tl-alert.component';
import { TlButtonComponent } from '../tl-button/tl-button.component';
import { TlCardComponent } from '../tl-card/tl-card.component';
import { TlDropDownComponent } from '../tl-dropdown/tl-dropdown.component';
import { TlFooterComponent } from '../tl-footer/tl-footer.component';
import { TlHeaderComponent } from '../tl-header/tl-header.component';
import { TlIconComponent } from '../tl-icon/tl-icon.component';
import { TlItWorksComponent } from '../tl-it-works/tl-it-works.component';
import { TlMegaMenuSectionComponent } from '../tl-mega-menu/tl-mega-menu-section/tl-mega-menu-section.component';
import { TlMegaMenuComponent } from '../tl-mega-menu/tl-mega-menu.component';
import { TlModalComponent } from '../tl-modal/tl-modal.component';
import { TlNavListComponent } from '../tl-nav-list/tl-nav-list.component';
import { TlTabComponent } from '../tl-tabs/tl-tab/tl-tab.component';
import { TlTabsComponent } from '../tl-tabs/tl-tabs.component';
import { TlThemesComponent } from '../tl-themes/tl-themes.component';
import { TlWysiwygComponent } from '../tl-wysiwyg/tl-wysiwyg.component';

/** This property contains a list of TAMU components classes. */
export const TL_ELEMENTS: Array<WvrElementDesc> = [
  // required weaver elements
  { component: WvrColorPreviewComponent, selector: 'wvre-color-preview', lazy: true },
  { component: WvrListComponent, selector: 'wvre-list', lazy: true },
  { component: WvrListItemComponent, selector: 'wvre-list-item', lazy: true },
  { component: WvrNavLiComponent, selector: 'wvre-nav-li', lazy: true },
  { component: WvrManifestComponent, selector: 'wvre-manifest', lazy: false },
  { component: WvrManifestEntryComponent, selector: 'wvre-manifest-entry', lazy: false },
  { component: WvrTextComponent, selector: 'wvre-text', lazy: true },
  { component: WvrThemeComponent, selector: 'wvre-theme', lazy: false },
  // tamu library elements
  { component: TlAlertComponent, selector: 'tl-alert', lazy: true },
  { component: TlButtonComponent, selector: 'tl-button', lazy: true },
  { component: TlCardComponent, selector: 'tl-card', lazy: true },
  { component: TlDropDownComponent, selector: 'tl-dropdown', lazy: true },
  { component: TlFooterComponent, selector: 'tl-footer', lazy: true },
  { component: TlHeaderComponent, selector: 'tl-header', lazy: true },
  { component: TlIconComponent, selector: 'tl-icon', lazy: true },
  { component: TlItWorksComponent, selector: 'tl-it-works', lazy: true },
  { component: TlMegaMenuComponent, selector: 'tl-mega-menu', lazy: true },
  { component: TlModalComponent, selector: 'tl-modal', lazy: true },
  { component: TlMegaMenuSectionComponent, selector: 'tl-mega-menu-section', lazy: true },
  { component: TlNavListComponent, selector: 'tl-nav-list', lazy: true },
  { component: TlTabsComponent, selector: 'tl-tabs', lazy: true },
  { component: TlTabComponent, selector: 'tl-tab', lazy: true },
  { component: TlThemesComponent, selector: 'tl-themes', lazy: false },
  { component: TlWysiwygComponent, selector: 'tl-wysiwyg', lazy: true }
];

const MODULES = [
  WvrCoreModule
];

const PROVIDERS = [];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [],
  exports: [],
  providers: [
    ...PROVIDERS
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TLCoreModule {

  constructor(@Optional() @SkipSelf() parentModule: TLCoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
