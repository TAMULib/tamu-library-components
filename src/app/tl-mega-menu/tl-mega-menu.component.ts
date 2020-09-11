import { AfterViewInit, Component, HostListener, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { debounce } from '@wvr/elements';
import { of } from 'rxjs';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';

@Component({
  selector: 'tl-mega-menu-element',
  templateUrl: './tl-mega-menu.component.html',
  styleUrls: ['./tl-mega-menu.component.scss']
})
export class TlMegaMenuComponent extends TamuAbstractBaseComponent implements AfterViewInit {

  @Input() menuTitle = 'Mega Menu';

  @Input() viewAllHref = 'https://library.tamu.edu';

  menuXOffset = 0;

  /** This variable allows customizing the text value of View All button in the mega menu. */
  @Input() viewAllButtonText = `View All ${this.menuTitle}`;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterViewInit(): void {
    this.calculateMenuXOffset();
  }

  @HostListener('click', ['$event']) toggleMobileMenuPanes($event: MouseEvent): void {
    console.log($event);
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

  @HostListener('window:resize') @debounce() calculateMenuXOffset(): void {
    const nativeElem = this._eRef.nativeElement as HTMLElement;
    const header = document.querySelector('tl-header') as HTMLElement;
    const bottomNav = header.shadowRoot.querySelector('[bottom-navigation]') as HTMLElement;
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
