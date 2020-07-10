import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-drop-down-element',
  templateUrl: './tl-drop-down.component.html',
  styleUrls: ['./tl-drop-down.component.scss']
})
export class TlDropDownComponent extends TamuAbstractBaseComponent {

  /** Used to override the drop-down menu active button. */
  @Input() btnType = '';

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

  /** Used to override the button background active state in a drop down */
  get btnBackgroundActive(): string {
    return `var(--tl-btn-${this.btnType}-active-background)`;
  }

  /** Used to override the button background hover state in a drop down */
  get btnBackgroundHover(): string {
    return `var(--tl-btn-${this.btnType}-hover-background)`;
  }

  /** Used to override the button border in a drop down */
  get btnBorderColor(): string {
    return `var(--tl-btn-${this.btnType}-border)`;
  }

  /** Used to override the button active state border in a drop down */
  get btnBorderActive(): string {
    return `var(--tl-btn-${this.btnType}-active-border)`;
  }

  /** Used to override the button focus state border in a drop down */
  get btnBorderFocus(): string {
    return `var(--tl-btn-${this.btnType}-focus-border)`;
  }

  /** Used to override the button active state border in a drop down */
  get btnBorderHover(): string {
    return `var(--tl-btn-${this.btnType}-hover-border)`;
  }

  /** Used to override the border radius of button in a dropdown */
  @HostBinding('style.--tl-btn-border-radius') @Input() btnBorderRadius;

  @HostBinding('style.--tl-btn-focus-box-shadow') @Input() btnBoxShadowFocus;

  /** Used to override the button color in a drop down */
  get btnColor(): string {
    return `var(--tl-btn-${this.btnType}-color)`;
  }

  /** Used to override the button color active state in a drop down */
  get btnColorActive(): string {
    return `var(--tl-btn-${this.btnType}-active-color)`;
  }

  /** Used to override the button color hover state in a drop down */
  get btnColorHover(): string {
    return `var(--tl-btn-${this.btnType}-hover-color)`;
  }

  /** Used to override the button font family in a drop down */
  @HostBinding('style.--tl-btn-font-family') @Input() btnFontFamily;

  /** Used to override the button font size in a drop down */
  @HostBinding('style.--tl-btn-font-size') @Input() btnFontSize;

  /** Used to override the line height of button in a drop down */
  @HostBinding('style.--tl-btn-line-height') @Input() btnLineHeight;

  /** Used to override the text alignment of button in a drop down */
  @HostBinding('style.--tl-btn-text-align') @Input() btnTextAlign;

  /** Used to override the text decoration property of button in a drop down */
  get btnTextDecoration(): string {
    return `var(--tl-btn-${this.btnType}-hover-color)`;
  }

  /** Used to override the active state of button text decoration property in a drop down */
  get btnTextDecorationActive(): string {
    return `var(--tl-btn-${this.btnType}-hover-color)`;
  }

  /** Used to override the focus state of button text decoration property in a drop down */
  get btnTextDecorationFocus(): string {
    return `var(--tl-btn-${this.btnType}-hover-color)`;
  }

  /** Used to override the hover state of button text decoration property in a drop down */
  get btnTextDecorationHover(): string {
    return `var(--tl-btn-${this.btnType}-hover-color)`;
  }

}
