import { Component, Input } from '@angular/core';

@Component({
  selector: 'tl-icon',
  templateUrl: './tl-icon.component.html',
  styleUrls: ['./tl-icon.component.scss']
})
export class TlIconComponent {

  /** Used to define the icon set. */
  @Input() set = 'tl';

  /** Used to define the name for icon component.  */
  @Input() name = 'tamu-logo';

  /** Used to define the color for icon component.  */
  @Input() color;

  /** Used to define the size for icon component.  */
  @Input() size;

}
