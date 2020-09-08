import { AfterViewInit, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-mega-menu-element',
  templateUrl: './tl-mega-menu.component.html',
  styleUrls: ['./tl-mega-menu.component.scss']
})
export class TlMegaMenuComponent extends TamuAbstractBaseComponent implements AfterViewInit {

  @Input() menuTitle = 'Mega Menu';

  @Input() viewAllHref = 'https://library.tamu.edu';

  menuXOffset = 0;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterViewInit(): void {
    this.calculateMenuXOffset();
  }

  private calculateMenuXOffset(): void {
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
