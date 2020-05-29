import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-drop-down-element',
  templateUrl: './tl-drop-down.component.html',
  styleUrls: ['./tl-drop-down.component.scss']
})
export class TlDropDownComponent extends TamuAbstractBaseComponent {

  /** Used to override the drop-down menu active button. */
  @Input() btnType = 'primary';

  /** Used to define the event type which will display the dropdown menu. */
  @Input() toggleOn = 'mouseover';

  @Input() menuAnimationSpeed;

  /** Used to define the drop down menu background. */
  // @HostBinding('style.--tl-dropdown-menu-background') @Input() menuBackground;

  /** Used to define the drop down menu border. */
  @HostBinding('style.--tl-dropdown-menu-border') @Input() menuBorder;

  /** Used to define the drop down menu-border-radius. */
  @HostBinding('style.--tl-dropdown-menu-border-radius') @Input() menuBorderRadius;

  /** Used to define the drop-down menu border display */
  @Input() menuBorderDisplay = 'var(--wvr-dropdown-menu-display)';

  /** Used to define the drop-down `menu-border-flexDirection` */
  @HostBinding('style.--tl-dropdown-menu-flex-direction') @Input() menuFlexDirection;

  /** Used to define the drop-down menu padding */
  @Input() menuPadding = 'var(--wvr-dropdown-menu-padding)';

  /** Used to define the drop-down menu width */
  @Input() menuWidth = 'var(--wvr-dropdown-menu-width)';

  /** Used to define the drop-down menu x offset. */
  @Input() menuXOffset = 'var(--wvr-dropdown-menu-x-offset)';

  /** Used to define the drop-down menu x offset. */
  @Input() menuYOffset = 'var(--wvr-dropdown-menu-y-offset)';

  /** Used to define the item margin in drop-down menu. */
  @Input() menuItemMargin = 'var(--wvr-dropdown-menu-item-margin)';

  /** Used to define the boolean value for the drop down */
  isOpen = false;
}
