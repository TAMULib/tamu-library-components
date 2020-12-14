import { ChangeDetectionStrategy, Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { Alignment } from '@wvr/elements';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

/**
 * The TamuNavList Component represents a navigation list.
 * Elements within this list must be of type : wvr-nav-li elements and can be either links of action elements.
 */
@Component({
  selector: 'tl-nav-list-component',
  templateUrl: './tl-nav-list.component.html',
  styleUrls: ['./tl-nav-list.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TamuNavListComponent extends TamuAbstractBaseComponent {

  /** The aligned property describing the positioning of the list elements. */
  @Input() aligned: Alignment = Alignment.LEFT;

  /** This allows the display of the list horizontally. */
  @Input() vertical = false;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
