import { AfterViewInit, Component, HostListener, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { debounce } from '@wvr/elements';

@Component({
  selector: 'tl-mega-menu-element',
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

  /** This click event listener highlights the selected component. */
  @HostListener('click', ['$event']) toggleMobileMenuPanes($event: MouseEvent): void {
    const clickedElem = (($event as any).path[0] as HTMLElement);
    const clickedElemName = clickedElem.tagName;
    switch (clickedElemName) {
      case 'WVR-DROPDOWN-BTN':
        const wvrDropDownElement = clickedElem.closest('wvr-dropdown-element');
        wvrDropDownElement.classList.contains('active') ?
        wvrDropDownElement.classList.remove('active') :
        wvrDropDownElement.classList.add('active');
        const mobileDisplay = (this._eRef.nativeElement as HTMLElement).querySelector('.mobile-display');
        mobileDisplay.classList.contains('active') ?
        mobileDisplay.classList.remove('active') :
        mobileDisplay.classList.add('active');
        break;
      case 'P':
        if (clickedElem.classList.contains('section-title')) {
          const sectionElement = clickedElem.closest('tl-mega-menu-section');
          sectionElement.classList.contains('active') ?
          sectionElement.classList.remove('active') :
          sectionElement.classList.add('active');
        }
        break;
      default:
    }
    // if ( === 'WVR-DROPDOWN-BTN') {

    // }
  }

  /** This event listener on window resize event helps the header for proper display. */
  @HostListener('window:resize') @debounce() calculateMenuXOffset(): void {
    if (!this.outOfHeader) {
      const nativeElem = this._eRef.nativeElement as HTMLElement;
      const header = document.querySelector('tl-header') as HTMLElement;
      const bottomNav = header.shadowRoot.querySelector('[bottom-navigation]') as HTMLElement;
      if (bottomNav) {
        let wvrBtn;
        const frameReq = requestAnimationFrame(() => {
          wvrBtn = nativeElem.querySelector('wvr-dropdown-btn');
          if (wvrBtn) {
            const wvrBtnWidth = wvrBtn.offsetWidth;
            this.menuXOffset = (bottomNav.firstChild as HTMLElement).offsetLeft - nativeElem.parentElement.offsetLeft;
            cancelAnimationFrame(frameReq);
          }
        });
      }
    }
  }

}
