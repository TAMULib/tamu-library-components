import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-button-component',
  templateUrl: './tl-button.component.html',
  styleUrls: ['./tl-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlButtonComponent extends TamuAbstractBaseComponent {

  /** Used to override the button class. */
  @Input() themeVariant;

  /** Used to define the size for button component.  */
  @Input() btnSize = '';

  /** Used to define the type of a button.  */
  @Input() wvrBtnType = 'button';

  /** Allows for the button component to be an anchor tag component if hrefUrl property present. */
  @Input() href;

  @Input() btnTxt;

  @Input() dispatchAction;

  @Input() dispatchActionProps;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
