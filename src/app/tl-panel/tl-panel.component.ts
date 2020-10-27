import { Component, Injector } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-panel-component',
  templateUrl: './tl-panel.component.html',
  styleUrls: ['./tl-panel.component.scss']
})
export class TlPanelComponent extends TamuAbstractBaseComponent {

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
