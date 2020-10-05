import { Component, Injector, OnInit } from '@angular/core';
import { __extends } from 'tslib';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-tabs-element',
  templateUrl: './tl-tabs.component.html',
  styleUrls: ['./tl-tabs.component.scss']
})
export class TlTabsComponent extends TamuAbstractBaseComponent {

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
