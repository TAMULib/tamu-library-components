import { ChangeDetectionStrategy, Component, HostBinding, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-card-component',
  templateUrl: './tl-card.component.html',
  styleUrls: ['./tl-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlCardComponent extends TamuAbstractBaseComponent {

  /** Used to override the type of card. */
  @Input() themeVariant;

  /** Used to describe the format of card. */
  @Input() panelFormat: 'solid' | 'outlined' | 'mixed';

 /** Designate how to expand/collapse. */
  @Input() collapseMethod: 'click' | 'none';

  /** Designate the initial expanded/collapsed state. */
  @Input() startCollapsed: boolean;

  /** Designate the actual expanded/collapsed state. */
  @Input() collapsed: boolean;

  /** Update the boolean when the element attribute changes. */
  @HostBinding('attr.collapsed') get collapsedGetter(): string {
    return this.collapsed ? 'true' : 'false';
  }

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
