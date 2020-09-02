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
  @Input() viewAllButtonText = `View All ${this.menuTitle}`;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
