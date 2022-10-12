import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-it-works-component',
  templateUrl: './tl-it-works.component.html',
  styleUrls: ['./tl-it-works.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlItWorksComponent extends TamuAbstractBaseComponent {

  /** The text value to be displayed in the page title. */
  title = 'tl-it-works-component';

  /** The text value to be displayed for text. */
  @Input() text = '';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
