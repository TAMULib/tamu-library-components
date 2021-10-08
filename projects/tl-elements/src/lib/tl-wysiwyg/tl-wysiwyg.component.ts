import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-wysiwyg-component',
  templateUrl: './tl-wysiwyg.component.html',
  styleUrls: ['./tl-wysiwyg.component.scss']
})
export class TlWysiwygComponent extends TamuAbstractBaseComponent {

  @Input() initialValue = '';

  @Input() emitEvent = '';

  skin = 'oxide';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
