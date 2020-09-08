import { AfterContentInit, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-mega-menu-element',
  templateUrl: './tl-mega-menu.component.html',
  styleUrls: ['./tl-mega-menu.component.scss']
})
export class TlMegaMenuComponent extends TamuAbstractBaseComponent implements AfterContentInit {

  @Input() menuTitle = 'Mega Menu';

  @Input() viewAllHref = 'https://library.tamu.edu';

  private leftOffset = 0;

  get menuXOffset(): string {
    return `${this.leftOffset}px`;
  }

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterContentInit(): void {
    const header = document.querySelector('tl-header') as HTMLElement;
    const bottomNav = header.shadowRoot.querySelector('[bottom-navigation]') as HTMLElement;
    const ulOffset = (bottomNav.firstChild as HTMLElement).offsetLeft;
    const parent = this._eRef.nativeElement.parentElement;
    const liOffset = this._eRef.nativeElement.parentElement.offsetLeft;
    setTimeout(() => {
      const wvrBtnWidth = this._eRef.nativeElement.querySelector('wvr-dropdown-btn').offsetWidth;
      // tslint:disable-next-line:max-line-length
      this.leftOffset = (bottomNav.firstChild as HTMLElement).offsetLeft - (this._eRef.nativeElement as HTMLElement).parentElement.offsetLeft;

    }, 500);
    // space = window.innerHeight - element.offsetTop
  }

}