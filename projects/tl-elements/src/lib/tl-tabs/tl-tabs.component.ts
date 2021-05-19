import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { TamuAbstractBaseComponent } from '../utility/tl-abstract-base.component';

@Component({
  selector: 'tl-tabs-component',
  templateUrl: './tl-tabs.component.html',
  styleUrls: ['./tl-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlTabsComponent extends TamuAbstractBaseComponent {

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
