import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-alert-component',
  templateUrl: './tl-alert.component.html',
  styleUrls: ['./tl-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlAlertComponent extends TamuAbstractBaseComponent {

  /** Used to override the theme variant. */
  @Input() themeVariant;

  /** Used to override the type of alert.  */
  @Input() alertType: 'basic' | 'self-closing' | 'custom';

  /** Used to override if close button has to be present for an alert.  */
  @Input() closeable: 'true' | 'false' = 'true';

  @Input() closeTimer;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
