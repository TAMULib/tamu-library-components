/* istanbul ignore file */

import { AfterContentInit, ChangeDetectionStrategy, Component, HostBinding, HostListener, Injector, Input } from '@angular/core';
import { debounce, wvrTimeout } from '@wvr/elements';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { TlMegaMenuSectionComponent } from './tl-mega-menu-section/tl-mega-menu-section.component';

@Component({
  selector: 'tl-mega-menu-component',
  templateUrl: './tl-mega-menu.component.html',
  styleUrls: ['./tl-mega-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlMegaMenuComponent extends TamuAbstractBaseComponent implements AfterContentInit {

  /** The default text value to be displayed for tl-mega menu title. */
  @Input() menuTitle = 'Mega Menu';

  /** This allows to provide href value for tl mega menu section href. */
  @Input() viewAllHref;

  /** The boolean variable enables proper header display on window resize. */
  @Input() outOfHeader = false;

  /** This property determines the mega menu dropdown x-offset. */
  menuXOffset = 0;

  /** This variable allows customizing the text value of View All button in the mega menu. */
  @Input() viewAllButtonText: string;

  active = false;

  /** This property determines the delay in milliseconds the dropdown takes prior to display on mouse hover. */
  @Input() openDelay = 50;

  /** This returns customized text or the default value to be displayed on the mega menu View All button. */
  get viewAllButtonDisplayText(): string {
    return this.viewAllButtonText ? this.viewAllButtonText : `View All ${this.menuTitle}`;
  }

  /** Allows for the override of the --tl-mobile-display-max-height variable. */
  @HostBinding('style.--tl-mobile-display-max-height') mobileDisplayMaxHeight = '0px';

  private readonly sections: Array<TlMegaMenuSectionComponent>;

  private sectionTitleHeight = 0;

  variantTypes = ['button'];

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
    this.sections = new Array<TlMegaMenuSectionComponent>();
  }

  /** This adjusts the dropdown menu x offset on page load. */
  ngAfterContentInit(): void {
    super.ngAfterContentInit();
    wvrTimeout(() => {
      this.calculateMenuXOffset();
    });
  }

  addSection(section: TlMegaMenuSectionComponent): void {
    this.sections.push(section);
    this.sectionTitleHeight = section.getElementHeight() > this.sectionTitleHeight
      ? section.getElementHeight()
      : this.sectionTitleHeight;
  }

  /** This toggles the display of mobile menu on click event. */
  toggleMobileMenuOpen(): void {
    this.mobileDisplayMaxHeight = `${this.sections.length * this.sectionTitleHeight}px`;

    if (this.active) {
      this.sections.forEach(s => {
        s.close();
      });
      this.active = false;
    } else {
      this.active = true;
    }
  }

  /** This event listener on window resize event helps the header for proper display. */
  @HostListener('window:resize') @debounce() calculateMenuXOffset(): void {
    if (!this.outOfHeader) {
      const nativeElem = this.eRef.nativeElement as HTMLElement;
      const header = document.querySelector('tl-header');
      if (!header) { return; }
      const bottomNav = header.shadowRoot.querySelector('div[bottom-navigation]');
      if (bottomNav) {
        let wvrBtn;
        const frameReq = requestAnimationFrame(() => {
          wvrBtn = nativeElem.querySelector('wvr-button-component');
          if (wvrBtn && bottomNav.children.length >= 2) {
            this.menuXOffset = (bottomNav.children[1] as HTMLElement).offsetLeft - nativeElem.parentElement.offsetLeft;
            cancelAnimationFrame(frameReq);
          }
        });
      }
    }
  }

}
