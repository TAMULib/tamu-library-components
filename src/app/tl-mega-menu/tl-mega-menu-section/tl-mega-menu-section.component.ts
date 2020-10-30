import { AfterViewInit, Component, HostBinding, Injector, Input, OnInit } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../shared/tl-abstract-base.component';
import { TlMegaMenuComponent } from '../tl-mega-menu.component';

@Component({
  selector: 'tl-mega-menu-section-component',
  templateUrl: './tl-mega-menu-section.component.html',
  styleUrls: ['./tl-mega-menu-section.component.scss']
})
export class TlMegaMenuSectionComponent extends TamuAbstractBaseComponent implements AfterViewInit, OnInit  {

  private parent: TlMegaMenuComponent;

  /** Toggles the mobile-layout class on the root element. */
  @HostBinding('class.mobile-layout') mobileLayout = this.isMobileLayout;

  /** Allows for the override of the --tl-mobile-display-wvr-nav-list-component-max-height variable. */
  @HostBinding('style.--wvr-nav-list-component-max-height') wvrNavListComponentMaxHeight: string;

  /** The text value to be displayed as section title in the tl-mega-menu dropdown menu. */
  @Input() sectionTitle = 'Section Title';

  /** The href value for the view all button. */
  @Input() viewAllHref: string;

  active = false;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    const elem = this._eRef.nativeElement as HTMLElement;
    const parentElem = elem.closest('tl-mega-menu') as HTMLElement;
    if (parentElem) {
      this.parent = this.componentRegistry.getComponentByElement(parentElem) as TlMegaMenuComponent;
    } else {
      console.warn(`TlMegaMenuSectionComponent (${this.id}) is not within a TLMegamMenuComponent`);
    }
  }

  ngAfterViewInit(): void {
    this.parent.addSection(this);
  }

  open(): void {
    // tslint:disable-next-line: radix
    let mobileDisplayMaxHeight = parseInt(this.parent.mobileDisplayMaxHeight.replace('px', ''));
    mobileDisplayMaxHeight += this.getExpandedHeight();
    this.active = true;
    this.parent.mobileDisplayMaxHeight = `${mobileDisplayMaxHeight}px`;
    this.wvrNavListComponentMaxHeight = `${this.getExpandedHeight()}px`;
  }

  close(): void {
    // tslint:disable-next-line: radix
    let mobileDisplayMaxHeight = parseInt(this.parent.mobileDisplayMaxHeight.replace('px', ''));
    this.active = false;
    mobileDisplayMaxHeight -= this.getExpandedHeight();
    this.parent.mobileDisplayMaxHeight = `${mobileDisplayMaxHeight}px`;
  }

  toggleOpenClose(): void {
    this.active ?
    this.close() :
    this.open();
  }

  getElementHeight(): number {
    return (this._eRef.nativeElement as HTMLElement).clientHeight;
  }

  getExpandedHeight(): number {
    const elem = (this._eRef.nativeElement as HTMLElement);
    const lis = elem.querySelectorAll('tl-nav-li');
    const liHeight = lis.length ? lis[0].clientHeight : 0;

    return lis.length * liHeight;
  }

}
