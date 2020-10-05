import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-alert-element',
  templateUrl: './tl-alert.component.html',
  styleUrls: ['./tl-alert.component.scss']
})
export class TlAlertComponent extends TamuAbstractBaseComponent {

  /** Used to override the alert class. */
  @Input() alertClass: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  /** Used to override the type of alert.  */
  @Input() alertType: 'basic' | 'self-closing' | 'custom' =  'basic';

  /** Used to override if close button has to be present for an alert.  */
  @Input() closable: 'true' | 'false' = 'true';

  private _closeTimer = 7000;

  @Input() set closeTimer(value: number) {
    this._closeTimer = value;
  }

  get closeTimer(): number {
    // tslint:disable-next-line: radix
    return this._closeTimer;
  }

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
