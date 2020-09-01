import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-mega-menu-element',
  templateUrl: './tl-mega-menu.component.html',
  styleUrls: ['./tl-mega-menu.component.scss']
})
export class TlMegaMenuComponent extends TamuAbstractBaseComponent {

  @Input() menuTitle = 'Mega Menu';

  @Input() viewAllHref = 'https://library.tamu.edu';

  /** This variable allows customizing the text value of View All button in the mega menu. */
  private _viewAllButtonText;

  /** This allows overriding the button text value. */
  @Input() set viewAllButtonText(value: string) {
    this._viewAllButtonText = (value) ? value : `View All ${this.menuTitle}`;
  }

  /** This getter returns the customized View All button text value. */
  get viewAllButtonText(): string {
    return this._viewAllButtonText;
  }

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
