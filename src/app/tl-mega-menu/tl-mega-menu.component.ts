import { AfterViewInit, Component, HostBinding, HostListener, Injector, Input, OnInit } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { debounce } from '@wvr/elements';
import { TlMegaMenuSectionComponent } from './tl-mega-menu-section/tl-mega-menu-section.component';

@Component({
  selector: 'tl-mega-menu-component',
  templateUrl: './tl-mega-menu.component.html',
  styleUrls: ['./tl-mega-menu.component.scss']
})
export class TlMegaMenuComponent extends TamuAbstractBaseComponent implements OnInit, AfterViewInit {
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

  /** This returns customized text or the default value to be displayed on the mega menu View All button. */
  get viewAllButtonDisplayText(): string {
    return this.viewAllButtonText ? this.viewAllButtonText : `View All ${this.menuTitle}`;
  }

  /** Allows for the override of the --tl-mobile-display-max-height variable. */
  @HostBinding('style.--tl-mobile-display-max-height') mobileDisplayMaxHeight = '0px';

  private sections: Array<TlMegaMenuSectionComponent>;

  private sectionTitleHeight = 0;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
    this.sections = new Array<TlMegaMenuSectionComponent>();
  }

  /** This adjusts the dropdown menu x offset on page load. */
  ngAfterViewInit(): void {
    this.calculateMenuXOffset();
  }

  addSection(section: TlMegaMenuSectionComponent): void {
    this.sections.push(section);
    this.sectionTitleHeight = section.getElementHeight() > this.sectionTitleHeight ?
                              section.getElementHeight() :
                              this.sectionTitleHeight;
  }

  /** This toggles the display of mobile menu on click event. */
  toggleMobileMenuOpen($event: MouseEvent): void {
    this.mobileDisplayMaxHeight = `${this.sections.length * this.sectionTitleHeight}px`;
    const mobileDisplay = (this._eRef.nativeElement as HTMLElement).querySelector('.mobile-display');
    const clickedElem = $event.target as HTMLElement;
    const wvrDropDownElement = clickedElem.closest('wvr-dropdown-component');
    const active = mobileDisplay.classList.contains('active');
    if (active) {
      this.sections.forEach(s => s.close());
      mobileDisplay.classList.remove('active');
      wvrDropDownElement.classList.remove('active');
    } else {
      mobileDisplay.classList.add('active');
      wvrDropDownElement.classList.add('active');
    }
  }

  /** This event listener on window resize event helps the header for proper display. */
  @HostListener('window:resize') @debounce() calculateMenuXOffset(): void {
    /* istanbul ignore else*/
    if (!this.outOfHeader) {
      const nativeElem = this._eRef.nativeElement as HTMLElement;
      const header = document.querySelector('tl-header');
      const bottomNav = header.shadowRoot.querySelector('[bottom-navigation]');
      /* istanbul ignore else*/
      if (bottomNav) {
        let wvrBtn;
        const frameReq = requestAnimationFrame(() => {
          wvrBtn = nativeElem.querySelector('wvre-dropdown-btn');
          /* istanbul ignore else*/
          if (wvrBtn) {
            this.menuXOffset = (bottomNav.firstChild as HTMLElement).offsetLeft - nativeElem.parentElement.offsetLeft;
            cancelAnimationFrame(frameReq);
          }
        });
      }
    }
  }

}
