/* istanbul ignore file */

import { AfterContentInit, ChangeDetectionStrategy, Component, HostBinding, HostListener, Injector, Input } from '@angular/core';
import { debounce, wvrTimeout } from '@wvr/elements';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { TlDropDownMenuSectionComponent } from './tl-dropdown-menu-section/tl-dropdown-menu-section.component';

@Component({
  selector: 'tl-dropdown-menu-component',
  templateUrl: './tl-dropdown-menu.component.html',
  styleUrls: ['./tl-dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlDropDownMenuComponent extends TamuAbstractBaseComponent implements AfterContentInit {

  /** The default text value to be displayed as the menu title. */
  @Input() menuTitle = 'Dropdown Menu';

  /** Designate the menu width. */
  @Input() menuWidth = 'auto';

  /** Determine the delay in milliseconds the dropdown takes prior to display on mouse hover. */
  @Input() openDelay = 500;

  /** Allows for the override of the --tl-mobile-display-max-height variable. */
  @HostBinding('style.--tl-mobile-display-max-height') mobileDisplayMaxHeight = '0px';

  /** Designate whether the menu is opened or closed. */
  active = false;

  /** The height of to use for each section. */
  private sectionHeight = 0;

  /** A container for all menu sections attached to this menu. */
  private readonly sections: Array<TlDropDownMenuSectionComponent> = [];

  /**
   * Append a section to the menu.
   *
   * The section title height will be auto-adjusted based on the added section.
   *
   * @param The section to append.
   */
  addSection(section: TlDropDownMenuSectionComponent): void {
    this.sections.push(section);

    const height = section.getElementHeight();
    if (height > this.sectionHeight) {
      this.sectionHeight = height;
    }
  }

  /**
   * Toggles the mobile view menu open or closed.
   */
  toggleMobileMenuOpen(): void {
    this.mobileDisplayMaxHeight = `${this.sections.length * this.sectionHeight}px`;
    this.active = !this.active;
  }

}
