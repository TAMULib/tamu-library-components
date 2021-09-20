import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { WvrSharedModule } from '@wvr/elements';
import { InlineSVGModule } from 'ng-inline-svg';
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

/** This property contains a list of components classes. */
export const TL_COMPONENTS = [
  TlAlertComponent,
  TlButtonComponent,
  TlCardComponent,
  TlDropDownComponent,
  TlFooterComponent,
  TlHeaderComponent,
  TlItWorksComponent,
  TlIconComponent,
  TlMegaMenuComponent,
  TlMegaMenuSectionComponent,
  TlModalComponent,
  TlNavListComponent,
  TlTabsComponent,
  TlTabComponent,
  TlThemesComponent,
  TlWysiwygComponent
];

export const TL_PIPES = [];

const MODULES = [
  CommonModule,
  EditorModule,
  FormsModule,
  InlineSVGModule,
  ReactiveFormsModule,
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
