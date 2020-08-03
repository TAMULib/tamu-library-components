import { Component, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-mega-menu-section',
  templateUrl: './tl-mega-menu-section.component.html',
  styleUrls: ['./tl-mega-menu-section.component.scss']
})
export class TlMegaMenuSectionComponent extends TamuAbstractBaseComponent  {

  @Input() sectionTitle = 'Section Title';

}
