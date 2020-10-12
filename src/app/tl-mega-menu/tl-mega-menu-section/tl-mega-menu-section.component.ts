import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-mega-menu-section-component',
  templateUrl: './tl-mega-menu-section.component.html',
  styleUrls: ['./tl-mega-menu-section.component.scss']
})
export class TlMegaMenuSectionComponent extends TamuAbstractBaseComponent  {

  /** The text value to be displayed as section title in the tl-mega-menu dropdown menu. */
  @Input() sectionTitle = 'Section Title';

  /** The href value for the view all button. */
  @Input() viewAllHref: string;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
