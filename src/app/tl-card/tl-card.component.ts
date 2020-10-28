import { Component, Injector } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-card-component',
  templateUrl: './tl-card.component.html',
  styleUrls: ['./tl-card.component.scss']
})
export class TlCardComponent extends TamuAbstractBaseComponent {

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
