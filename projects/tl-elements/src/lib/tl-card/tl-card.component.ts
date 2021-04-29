import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../utility/tl-abstract-base.component';

@Component({
  selector: 'tl-card-component',
  templateUrl: './tl-card.component.html',
  styleUrls: ['./tl-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlCardComponent extends TamuAbstractBaseComponent {

  /** Used to override the type of card. */
  @Input() themeVariant;

  /** Used to describe the format of card. */
  @Input() panelFormat: 'solid' | 'outlined' | 'mixed';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
