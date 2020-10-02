import { Component, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-tab',
  templateUrl: './tl-tab.component.html',
  styleUrls: ['./tl-tab.component.scss']
})
export class TlTabComponent extends TamuAbstractBaseComponent {

  @Input() tabText = `Tab ${this.id}`;

}
