import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-drop-down-element',
  templateUrl: './tl-drop-down.component.html',
  styleUrls: ['./tl-drop-down.component.scss']
})
export class TlDropDownComponent extends TamuAbstractBaseComponent {

  /** Used to override the drop-down menu active button. */
  @Input() btnType = 'success';

  /** Used to define the drop down menu background. */
  @HostBinding('style.--tl-dropdown-menu-background') @Input() menuBackground;

  /** Used to define the drop down menu border. */
  @HostBinding('style.--tl-dropdown-menu-border') @Input() menuBorder;

  /** Used to define the drop-down menu border display */
  @HostBinding('style.--tl-dropdown-menu-border-display') @Input() menuBorderDisplay;

  /** Used to define the drop down menu-border-radius. */
  @HostBinding('style.--tl-dropdown-menu-border-radius') @Input() menuBorderRadius;

  /** Used to define the drop down menu box shadow. */
  @HostBinding('style.--tl-dropdown-menu-box-shadow') @Input() menuBoxShadow;

  /** Used to define the drop-down `menu-border-flexDirection` */
  @HostBinding('style.--tl-dropdown-menu-flex-direction') @Input() menuFlexDirection;

  /** Used to define the item margin in drop-down menu. */
  @HostBinding('style.--tl-dropdown-menu-item-margin') @Input() menuItemMargin;

  /** Used to define the drop-down menu padding */
  @HostBinding('style.--tl-dropdown-menu-padding') @Input() menuPadding;

  /** Used to define the drop-down menu width */
  @HostBinding('style.--tl-dropdown-menu-width') @Input() menuWidth;

  /** Used to define the drop-down menu x offset. */
  @HostBinding('style.--tl-dropdown-menu-x-offset') @Input() menuXOffset;

  /** Used to define the drop-down menu x offset. */
  @HostBinding('style.--tl-dropdown-menu-y-offset') @Input() menuYOffset;

  /** Used to define the event type which will display the dropdown menu. */
  @Input() toggleOn = 'click';

  /** Used to define the boolean value for the drop down */
  isOpen = false;

  /** Used to override the button background in a drop down */
  get btnBackground(): string {
    return `var(--tl-btn-${this.btnType}-background)`;
  }
  /** Used to override the button border in a drop down */
  get btnBorderColor(): string {
    return `var(--tl-btn-${this.btnType}-border)`;
  }
  /** Used to override the button color in a drop down */
  get btnColor(): string {
    return `var(--tl-btn-${this.btnType}-color)`;
  }
  /** Used to override the button background hover state in a drop down */
  get btnBackgroundHover(): string {
    return `var(--tl-btn-${this.btnType}-hover-background)`;
  }
}
