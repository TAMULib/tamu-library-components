import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TlDropDownComponent } from './tl-drop-down.component';

describe('TlDropDownComponent', () => {
  let component: TlDropDownComponent;
  let fixture: ComponentFixture<TlDropDownComponent>;
  const initialState = { theme: {
    themes: {}
  }};

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule
    ],
    declarations: [TlDropDownComponent],
    providers: [
      provideMockStore({initialState}),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ],
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
    expect(component.themeVariant)
      .toEqual(undefined);
    component.themeVariant = 'primary';
    fixture.detectChanges();
    expect(component.themeVariant)
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
    component.themeVariant = 'primary';
    expect(component.btnBackground)
      .toEqual('var(--tl-btn-primary-background)');
  });

  it('should have customization of the button active background color in drop down based on the button type', () => {
    expect(component.btnBackgroundActive)
      .toEqual('var(--tl-btn-undefined-active-background)');
    component.themeVariant = 'primary';
    expect(component.btnBackgroundActive)
      .toEqual('var(--tl-btn-primary-active-background)');
  });

  it('should have customization of the button hover background color in drop down based on the button type', () => {
    expect(component.btnBackgroundHover)
      .toEqual('var(--tl-btn-undefined-hover-background)');
    component.themeVariant = 'primary';
    expect(component.btnBackgroundHover)
      .toEqual('var(--tl-btn-primary-hover-background)');
  });

  it('should have customization of the button border color in drop down based on the button type', () => {
    expect(component.btnBorderColor)
      .toEqual('var(--tl-btn-undefined-border)');
    component.themeVariant = 'primary';
    expect(component.btnBorderColor)
      .toEqual('var(--tl-btn-primary-border)');
  });

  it('should have customization of the active button border color in drop down based on the button type', () => {
    expect(component.btnBorderActive)
      .toEqual('var(--tl-btn-undefined-active-border)');
    component.themeVariant = 'primary';
    expect(component.btnBorderActive)
      .toEqual('var(--tl-btn-primary-active-border)');
  });

  it('should have customization of the button in focus - border color in drop down based on the button type', () => {
    expect(component.btnBorderFocus)
      .toEqual('var(--tl-btn-undefined-focus-border)');
    component.themeVariant = 'primary';
    expect(component.btnBorderFocus)
      .toEqual('var(--tl-btn-primary-focus-border)');
  });

  it('should have customization of the hover state of button in focus - border color in drop down based on the button type', () => {
    expect(component.btnBorderHover)
      .toEqual('var(--tl-btn-undefined-hover-border)');
    component.themeVariant = 'primary';
    expect(component.btnBorderHover)
      .toEqual('var(--tl-btn-primary-hover-border)');
  });

});
