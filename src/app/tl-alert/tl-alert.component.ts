import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-alert-element',
  templateUrl: './tl-alert.component.html',
  styleUrls: ['./tl-alert.component.scss']
})
export class TlAlertComponent extends TamuAbstractBaseComponent {

  /** Used to override the alert class. */
  @Input() alertClass;

  /** Used to override the type of alert.  */
  @Input() alertType;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
