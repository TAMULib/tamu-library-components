import { AfterViewInit, Component, HostListener, Injector, Input } from '@angular/core';
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

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  /** This adjusts the dropdown menu x offset on page load. */
  ngAfterViewInit(): void {
    this.calculateMenuXOffset();
  }

  toggleMobileMenuOpen($event: MouseEvent): void {
    const clickedElem = $event.target as HTMLElement;
    const wvrDropDownElement = clickedElem.closest('wvre-dropdown-element');
    wvrDropDownElement.classList.contains('active') ?
    wvrDropDownElement.classList.remove('active') :
    wvrDropDownElement.classList.add('active');
    const mobileDisplay = (this._eRef.nativeElement as HTMLElement).querySelector('.mobile-display');
    mobileDisplay.classList.contains('active') ?
    mobileDisplay.classList.remove('active') :
    mobileDisplay.classList.add('active');
  }

  toggleMobileMenuSectionOpen($event: MouseEvent): void {
    const sectionElement = ($event.target as HTMLElement).closest('tl-mega-menu-section');
    sectionElement.classList.contains('active') ?
    sectionElement.classList.remove('active') :
    sectionElement.classList.add('active');
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
