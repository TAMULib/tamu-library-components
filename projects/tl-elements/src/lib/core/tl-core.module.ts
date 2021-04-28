import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Optional, SkipSelf } from '@angular/core';
import { WvrColorPreviewComponent, WvrCoreModule, WvrListComponent, WvrListItemComponent, WvrManifestComponent, WvrManifestEntryComponent, WvrNavLiComponent, WvrSharedModule, WvrTextComponent, WvrThemeComponent } from '@wvr/elements';
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

/** This property contains a list of TAMU components classes. */
export const TL_ELEMENTS = [
  // required weaver elements
  { component: WvrColorPreviewComponent, selector: 'wvre-color-preview' },
  { component: WvrListComponent, selector: 'wvre-list' },
  { component: WvrListItemComponent, selector: 'wvre-list-item' },
  { component: WvrNavLiComponent, selector: 'wvre-nav-li' },
  { component: WvrManifestComponent, selector: 'wvre-manifest' },
  { component: WvrManifestEntryComponent, selector: 'wvre-manifest-entry' },
  { component: WvrTextComponent, selector: 'wvre-text' },
  { component: WvrThemeComponent, selector: 'wvre-theme' },
  // tamu library elements
  { component: TlAlertComponent, selector: 'tl-alert' },
  { component: TlButtonComponent, selector: 'tl-button' },
  { component: TlCardComponent, selector: 'tl-card' },
  { component: TlDropDownComponent, selector: 'tl-drop-down' },
  { component: TamuFooterComponent, selector: 'tl-footer' },
  { component: TamuHeaderComponent, selector: 'tl-header' },
  { component: TlIconComponent, selector: 'tl-icon' },
  { component: TamuItWorksComponent, selector: 'tl-it-works' },
  { component: TlMegaMenuComponent, selector: 'tl-mega-menu' },
  { component: TlModalComponent, selector: 'tl-modal'},
  { component: TlMegaMenuSectionComponent, selector: 'tl-mega-menu-section' },
  { component: TamuNavListComponent, selector: 'tl-nav-list' },
  { component: TlTabsComponent, selector: 'tl-tabs' },
  { component: TlTabComponent, selector: 'tl-tab' },
  { component: TlThemesComponent, selector: 'tl-themes' },
  { component: TlWysiwygComponent, selector: 'tl-wysiwyg' }
];

const MODULES = [];

const PROVIDERS = [];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
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
