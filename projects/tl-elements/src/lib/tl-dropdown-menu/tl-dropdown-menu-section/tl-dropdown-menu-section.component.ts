import { AfterContentInit, ChangeDetectionStrategy, Component, HostBinding, Injector, Input, OnInit } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../shared/tl-abstract-base.component';
import { TlDropDownMenuComponent } from '../tl-dropdown-menu.component';

@Component({
  selector: 'tl-dropdown-menu-section-component',
  templateUrl: './tl-dropdown-menu-section.component.html',
  styleUrls: ['./tl-dropdown-menu-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlDropDownMenuSectionComponent extends TamuAbstractBaseComponent implements AfterContentInit, OnInit  {

  private parent: TlDropDownMenuComponent;

  /** Toggles the mobile-layout class on the root element. */
  @HostBinding('class.mobile-layout') mobileLayout = this.isMobileLayout;

  /** Allows for the override of the --tl-mobile-display-wvr-nav-list-component-max-height variable. */
  @HostBinding('style.--wvr-nav-list-component-max-height') wvrNavListComponentMaxHeight: string;

  /**
   * Perform initialization operations.
   *
   * This will identify the parent element.
   */
  ngOnInit(): void {
    super.ngOnInit();

    const elem = this.eRef.nativeElement as HTMLElement;
    const parentElem = elem.closest('tl-dropdown-menu');

    if (parentElem) {
      this.parent = this.componentRegistry.getComponentByElement(parentElem as HTMLElement) as TlDropDownMenuComponent;
    } else {
      console.warn(`TlDropDownMenuSectionComponent (${this.id}) is not within a TlDropDownMenuComponent`);
    }
  }

  /**
   * Perform after-initialization operations.
   *
   * This will add the section to the parent's component.
   */
  ngAfterContentInit(): void {
    super.ngAfterContentInit();

    setTimeout(() => {
      this.parent.addSection(this);
    }, 1500);
  }

  /**
   * Get the clientHeight of the element.
   *
   * @returns the height of the element, in pixels.
   */
  getElementHeight(): number {
    return (this.eRef.nativeElement as HTMLElement).clientHeight;
  }

}
