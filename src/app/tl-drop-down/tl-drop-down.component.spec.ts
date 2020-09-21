import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TlDropDownComponent } from './tl-drop-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TlDropDownComponent', () => {
  let component: TlDropDownComponent;
  let fixture: ComponentFixture<TlDropDownComponent>;

  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [BrowserAnimationsModule],
    declarations: [TlDropDownComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should have customization for dropdown button type styling', () => {
    expect(component.btnType)
      .toEqual(undefined);
    component.btnType = 'primary';
    fixture.detectChanges();
    expect(component.btnType)
      .toEqual('primary');
  });

  it('should provide href value for dropdown button', () => {
    expect(component.btnHref)
      .toEqual(undefined);
  });

  it('should have customization for drop down menu background', () => {
    expect(component.menuBackground)
      .toEqual(undefined);
    component.menuBackground = 'var(--tl-dropdown-menu-background)';
    fixture.detectChanges();
    expect(component.menuBackground)
      .toEqual('var(--tl-dropdown-menu-background)');
  });

  it('should have customization for drop down menu border', () => {
    expect(component.menuBorder)
      .toEqual(undefined);
    component.menuBorder = 'var(--tl-dropdown-menu-border)';
    fixture.detectChanges();
    expect(component.menuBorder)
      .toEqual('var(--tl-dropdown-menu-border)');
  });

  it('should have customization for drop down menu border display', () => {
    expect(component.menuBorderDisplay)
      .toEqual(undefined);
    component.menuBorderDisplay = 'var(--tl-dropdown-menu-border-display)';
    fixture.detectChanges();
    expect(component.menuBorderDisplay)
      .toEqual('var(--tl-dropdown-menu-border-display)');
  });

  it('should have customization for drop down menu border radius', () => {
    expect(component.menuBorderRadius)
      .toEqual(undefined);
    component.menuBorderRadius = 'var(--tl-dropdown-menu-border-radius)';
    fixture.detectChanges();
    expect(component.menuBorderRadius)
      .toEqual('var(--tl-dropdown-menu-border-radius)');
  });

  it('should have customization for drop down menu box shadow', () => {
    expect(component.menuBoxShadow)
      .toEqual(undefined);
    component.menuBoxShadow = 'var(--tl-dropdown-menu-box-shadow)';
    fixture.detectChanges();
    expect(component.menuBoxShadow)
      .toEqual('var(--tl-dropdown-menu-box-shadow)');
  });

  it('should have customization for flex direction for drop down menu', () => {
    expect(component.menuFlexDirection)
      .toEqual(undefined);
    component.menuFlexDirection = 'var(--tl-dropdown-menu-flex-direction)';
    fixture.detectChanges();
    expect(component.menuFlexDirection)
      .toEqual('var(--tl-dropdown-menu-flex-direction)');
  });

  it('should have customization for item margin in drop-down menu', () => {
    expect(component.menuItemMargin)
      .toEqual(undefined);
    component.menuItemMargin = 'var(--tl-dropdown-menu-item-margin)';
    fixture.detectChanges();
    expect(component.menuItemMargin)
      .toEqual('var(--tl-dropdown-menu-item-margin)');
  });

  it('should have customization the drop-down menu padding', () => {
    expect(component.menuPadding)
      .toEqual(undefined);
    component.menuPadding = 'var(--tl-dropdown-menu-padding)';
    fixture.detectChanges();
    expect(component.menuPadding)
      .toEqual('var(--tl-dropdown-menu-padding)');
  });

  it('should have customization the drop-down menu width', () => {
    expect(component.menuWidth)
      .toEqual(undefined);
    component.menuWidth = 'var(--tl-dropdown-menu-width)';
    fixture.detectChanges();
    expect(component.menuWidth)
      .toEqual('var(--tl-dropdown-menu-width)');
  });

  it('should have customization the drop-down menu x offset', () => {
    expect(component.menuXOffset)
      .toEqual(undefined);
    component.menuXOffset = 'var(--tl-dropdown-menu-x-offset)';
    fixture.detectChanges();
    expect(component.menuXOffset)
      .toEqual('var(--tl-dropdown-menu-x-offset)');
  });

  it('should have customization the drop-down menu y offset', () => {
    expect(component.menuYOffset)
      .toEqual('-6px');
  });

  it('should have customization tfor dropdown display type', () => {
    expect(component.toggleOn)
      .toEqual('click');
    component.toggleOn = 'mouseover';
    fixture.detectChanges();
    expect(component.toggleOn)
      .toEqual('mouseover');
  });

  it('should have customization tfor dropdown display type', () => {
    expect(component.toggleOn)
      .toEqual('click');
    component.toggleOn = 'mouseover';
    fixture.detectChanges();
    expect(component.toggleOn)
      .toEqual('mouseover');
  });

  it('should have customization of the button background color in drop down based on the button type', () => {
    expect(component.btnBackground)
      .toEqual('var(--tl-btn-undefined-background)');
    component.btnType = 'primary';
    expect(component.btnBackground)
      .toEqual('var(--tl-btn-primary-background)');
  });

  it('should have customization of the button active background color in drop down based on the button type', () => {
    expect(component.btnBackgroundActive)
      .toEqual('var(--tl-btn-undefined-active-background)');
    component.btnType = 'primary';
    expect(component.btnBackgroundActive)
      .toEqual('var(--tl-btn-primary-active-background)');
  });

  it('should have customization of the button hover background color in drop down based on the button type', () => {
    expect(component.btnBackgroundHover)
      .toEqual('var(--tl-btn-undefined-hover-background)');
    component.btnType = 'primary';
    expect(component.btnBackgroundHover)
      .toEqual('var(--tl-btn-primary-hover-background)');
  });

  it('should have customization of the button border color in drop down based on the button type', () => {
    expect(component.btnBorderColor)
      .toEqual('var(--tl-btn-undefined-border)');
    component.btnType = 'primary';
    expect(component.btnBorderColor)
      .toEqual('var(--tl-btn-primary-border)');
  });

  it('should have customization of the active button border color in drop down based on the button type', () => {
    expect(component.btnBorderActive)
      .toEqual('var(--tl-btn-undefined-active-border)');
    component.btnType = 'primary';
    expect(component.btnBorderActive)
      .toEqual('var(--tl-btn-primary-active-border)');
  });

  it('should have customization of the button in focus - border color in drop down based on the button type', () => {
    expect(component.btnBorderFocus)
      .toEqual('var(--tl-btn-undefined-focus-border)');
    component.btnType = 'primary';
    expect(component.btnBorderFocus)
      .toEqual('var(--tl-btn-primary-focus-border)');
  });

  it('should have customization of the hover state of button in focus - border color in drop down based on the button type', () => {
    expect(component.btnBorderHover)
      .toEqual('var(--tl-btn-undefined-hover-border)');
    component.btnType = 'primary';
    expect(component.btnBorderHover)
      .toEqual('var(--tl-btn-primary-hover-border)');
  });

  // it('should have customization of the border radius of a button', () => {
  //   expect(component.btnBorderRadius)
  //     .toEqual('var(--tl-btn-border-radius)');
  //   component.btnBorderRadius = '3px';
  //   expect(component.btnBorderRadius)
  //     .toEqual('3px');
  // });

  //  /** Used to define the boolean value for the drop down */
  //  isOpen = false;

  //  /** Used to override the border radius of button in a dropdown */
  //  @HostBinding('style.--tl-btn-border-radius') @Input() btnBorderRadius;

  //  @HostBinding('style.--tl-btn-focus-box-shadow') @Input() btnBoxShadowFocus;

  //  /** Used to override the button color in a drop down */
  //  get btnColor(): string {
  //    return `var(--tl-btn-${this.btnType}-color)`;
  //  }

  //  /** Used to override the button color active state in a drop down */
  //  get btnColorActive(): string {
  //    return `var(--tl-btn-${this.btnType}-active-color)`;
  //  }

  //  /** Used to override the button color hover state in a drop down */
  //  get btnColorHover(): string {
  //    return `var(--tl-btn-${this.btnType}-hover-color)`;
  //  }

  //  /** Used to override the button font family in a drop down */
  //  @HostBinding('style.--tl-btn-font-family') @Input() btnFontFamily;

  //  /** Used to override the button font size in a drop down */
  //  @HostBinding('style.--tl-btn-font-size') @Input() btnFontSize;

  //  /** Used to override the line height of button in a drop down */
  //  @HostBinding('style.--tl-btn-line-height') @Input() btnLineHeight;

  //  /** Used to override the text alignment of button in a drop down */
  //  @HostBinding('style.--tl-btn-text-align') @Input() btnTextAlign;

  //  /** Used to override the text decoration property of button in a drop down */
  //  get btnTextDecoration(): string {
  //    return `var(--tl-btn-${this.btnType}-hover-color)`;
  //  }

  //  /** Used to override the active state of button text decoration property in a drop down */
  //  get btnTextDecorationActive(): string {
  //    return `var(--tl-btn-${this.btnType}-hover-color)`;
  //  }

  //  /** Used to override the focus state of button text decoration property in a drop down */
  //  get btnTextDecorationFocus(): string {
  //    return `var(--tl-btn-${this.btnType}-hover-color)`;
  //  }

  //  /** Used to override the hover state of button text decoration property in a drop down */
  //  get btnTextDecorationHover(): string {
  //    return `var(--tl-btn-${this.btnType}-hover-color)`;
  //  }
});
