import { AfterViewInit, Component, Injector, Input, OnInit } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../shared/tl-abstract-base.component';
import { TlMegaMenuComponent } from '../tl-mega-menu.component';

@Component({
  selector: 'tl-mega-menu-section-component',
  templateUrl: './tl-mega-menu-section.component.html',
  styleUrls: ['./tl-mega-menu-section.component.scss']
})
export class TlMegaMenuSectionComponent extends TamuAbstractBaseComponent implements AfterViewInit, OnInit  {

  private parent: TlMegaMenuComponent;

  /** The text value to be displayed as section title in the tl-mega-menu dropdown menu. */
  @Input() sectionTitle = 'Section Title';

  /** The href value for the view all button. */
  @Input() viewAllHref: string;

  private elem = this._eRef.nativeElement as HTMLElement;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    const elem = this._eRef.nativeElement as HTMLElement;
    const parentElem = elem.closest('tl-mega-menu') as HTMLElement;
    this.parent = this.componentRegistry.getComponentByElement(parentElem) as TlMegaMenuComponent;
  }

  ngAfterViewInit(): void {
    this.parent.addSection(this);
  }

  open(): void {
    // tslint:disable-next-line: radix
    let mobileDisplayMaxHeight = parseInt(this.parent.mobileDisplayMaxHeight.replace('px', ''));
    mobileDisplayMaxHeight += this.getExpandedHeight();
    this.elem.classList.add('active');
    this.parent.mobileDisplayMaxHeight = `${mobileDisplayMaxHeight}px`;
    this.parent.mobileDisplayWvrNavListComponentMaxHeight = `${this.getExpandedHeight()}px`;
  }

  close(): void {
    this.elem.classList.remove('active');
    // tslint:disable-next-line: radix
    let mobileDisplayMaxHeight = parseInt(this.parent.mobileDisplayMaxHeight.replace('px', ''));
    setTimeout(() => {
      mobileDisplayMaxHeight -= this.getExpandedHeight();
      this.parent.mobileDisplayMaxHeight = `${mobileDisplayMaxHeight}px`;
    });
  }

  toggleOpenClose(): void {
    this.elem.classList.contains('active') ?
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
