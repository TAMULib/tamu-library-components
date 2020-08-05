import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-mega-menu-section-element',
  templateUrl: './tl-mega-menu-section.component.html',
  styleUrls: ['./tl-mega-menu-section.component.scss']
})
export class TlMegaMenuSectionComponent extends TamuAbstractBaseComponent  {

  @Input() sectionTitle = 'Section Title';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
