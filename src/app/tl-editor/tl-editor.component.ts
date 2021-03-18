import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-editor-component',
  templateUrl: './tl-editor.component.html',
  styleUrls: ['./tl-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TlEditorComponent extends TamuAbstractBaseComponent {

  initialValue = 'This is tl-editor';

  skin = 'oxide';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
