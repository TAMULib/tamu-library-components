import { AfterViewInit, Component, HostBinding, HostListener, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { debounce } from '@wvr/elements';

@Component({
  selector: 'tl-mega-menu-component',
  templateUrl: './tl-mega-menu.component.html',
  styleUrls: ['./tl-mega-menu.component.scss']
})
export class TlMegaMenuComponent extends TamuAbstractBaseComponent implements AfterViewInit {
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

  /** Allows for the override of the --tl-mobile-display-wvr-nav-list-component-max-height variable. */
  @HostBinding('style.--tl-mobile-display-wvr-nav-list-component-max-height') mobileDisplayWvrNavListComponentMaxHeight: string;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  /** This adjusts the dropdown menu x offset on page load. */
  ngAfterViewInit(): void {
    this.calculateMenuXOffset();
    this.calculateMaxHeights();
  }

  /** This toggles the display of mobile menu on click event. */
  toggleMobileMenuOpen($event: MouseEvent): void {
    const clickedElem = $event.target as HTMLElement;
    const wvrDropDownElement = clickedElem.closest('wvr-dropdown-component');
    wvrDropDownElement.classList.contains('active') ?
    wvrDropDownElement.classList.remove('active') :
    wvrDropDownElement.classList.add('active');
    const mobileDisplay = (this._eRef.nativeElement as HTMLElement).querySelector('.mobile-display');
    mobileDisplay.classList.contains('active') ?
    mobileDisplay.classList.remove('active') :
    mobileDisplay.classList.add('active');
  }

  /** This toggles the display of tl-mega-menu-section mobile menu on click event. */
  toggleMobileMenuSectionOpen($event: MouseEvent): void {
    const sectionElement = ($event.target as HTMLElement).closest('tl-mega-menu-section');
    const elem = this._eRef.nativeElement as HTMLElement;
    const sections = elem.querySelectorAll('tl-mega-menu-section');
    const sectionMaxHeight = this.getSectionHeight(sections);
    // tslint:disable-next-line: radix
    let mobileDisplayMaxHeight = parseInt(this.mobileDisplayMaxHeight.replace('px', ''));
    if (sectionElement.classList.contains('active')) {
      sectionElement.classList.remove('active');
      setTimeout(() => {
        mobileDisplayMaxHeight -= sectionMaxHeight;
        this.mobileDisplayMaxHeight = `${mobileDisplayMaxHeight}px`;
      }, 1000);
    } else {
      mobileDisplayMaxHeight += sectionMaxHeight;
      this.mobileDisplayMaxHeight = `${mobileDisplayMaxHeight}px`;
      sectionElement.classList.add('active');
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
  /** This calculates the maximum height for tl-mega-menu-section in mobile view. */
  calculateMaxHeights(): void {
    const elem = this._eRef.nativeElement as HTMLElement;
    const sections = elem.querySelectorAll('tl-mega-menu-section');
    const sectionMaxHeight = this.getSectionHeight(sections);
    setTimeout(() => {
      const sectionTitles = elem.querySelectorAll('.section-title');
      const sectionTitleHeight = sectionTitles[0] ? sectionTitles[0].clientHeight : 0;
      const sectionTitlesHeight = sectionTitles.length * sectionTitleHeight;
      this.mobileDisplayWvrNavListComponentMaxHeight = `${sectionMaxHeight}px`;
      this.mobileDisplayMaxHeight = `${sectionTitlesHeight}px`;
    }, 0);
  }

  /** This calculates the maximum height for section in mobile view. */
  // tslint:disable-next-line:prefer-function-over-method
  private getSectionHeight(sections: NodeListOf<Element>): number {
    let sectionMaxHeight = 0;
    sections.forEach(section => {
      const lis = section.querySelectorAll('tl-nav-li');
      if (lis[0]) {
        const liHeight = lis[0].clientHeight;
        const currentHeight = lis.length * liHeight;
        if (sectionMaxHeight < currentHeight) {
          sectionMaxHeight = currentHeight;
        }
      }
    });

    return sectionMaxHeight;
  }
}
