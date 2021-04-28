import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../utility/tl-abstract-base.component';

@Component({
  selector: 'tl-tab-component',
  templateUrl: './tl-tab.component.html',
  styleUrls: ['./tl-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlTabComponent extends TamuAbstractBaseComponent {

  @Input() tabText = `Tab ${this.id}`;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
