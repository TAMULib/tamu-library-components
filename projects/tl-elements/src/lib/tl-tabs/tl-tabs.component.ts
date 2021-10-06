import { ChangeDetectionStrategy, Component, HostBinding, Injector } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-tabs-component',
  templateUrl: './tl-tabs.component.html',
  styleUrls: ['./tl-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlTabsComponent extends TamuAbstractBaseComponent {

  // @HostBinding('style.--${this.themeVariant}-tab-inactive-color') tabInactiveColor: any;
  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
