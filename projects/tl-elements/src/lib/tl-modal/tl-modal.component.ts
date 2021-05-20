import { Component, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../utility/tl-abstract-base.component';

@Component({
  selector: 'tl-modal-component',
  templateUrl: './tl-modal.component.html',
  styleUrls: ['./tl-modal.component.scss']
})
export class TlModalComponent extends TamuAbstractBaseComponent {

  btnThemeVariant = 'primary';

  @Input() title;

  @Input() btnText;

  @Input() btnVisible = 'true';

}
