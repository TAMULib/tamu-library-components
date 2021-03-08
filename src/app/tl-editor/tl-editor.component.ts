import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-editor-component',
  templateUrl: './tl-editor.component.html',
  styleUrls: ['./tl-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlEditorComponent extends TamuAbstractBaseComponent {

  @Input() initialValue = 'This is tl-editor';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
