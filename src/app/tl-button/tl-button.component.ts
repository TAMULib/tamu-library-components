import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tl-button',
  templateUrl: './tl-button.component.html',
  styleUrls: ['./tl-button.component.scss']
})
export class TlButtonComponent {

  /** Used to override the button class. */
  @Input() btnClass = 'success';

  /** Used to define the size for button component.  */
  @Input() btnSize = '';

  /** Used to define the type of a button.  */
  @Input() wvrBtnType = 'button';

  /** Allows for the button component to be an anchor tag component if hrefUrl property present. */
  @Input() href;

}
