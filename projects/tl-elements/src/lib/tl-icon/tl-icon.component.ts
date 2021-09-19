import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-icon-component',
  templateUrl: './tl-icon.component.html',
  styleUrls: ['./tl-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlIconComponent extends TamuAbstractBaseComponent {

  /** Used to define the icon set. */
  @Input() set = 'tl';

  /** Used to define the name for icon component.  */
  @Input() name = 'tamu-logo';

  /** Used to define the color for icon component.  */
  @Input() color;

  /** Used to define the size for icon component.  */
  @Input() size;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
