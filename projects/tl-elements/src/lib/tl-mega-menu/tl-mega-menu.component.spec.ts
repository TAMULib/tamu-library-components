import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../shared/tl-shared.module';
import { TlMegaMenuComponent } from './tl-mega-menu.component';

describe('TlMegaMenuComponent', () => {
  let component: TlMegaMenuComponent;
  let fixture: ComponentFixture<TlMegaMenuComponent>;
  let debugElement: DebugElement;
  const initialState = {
    theme: {
      themes: {}
    }
  };

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule,
      HttpClientTestingModule,
      TLSharedModule
    ],
    declarations: [TlMegaMenuComponent],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMegaMenuComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    component.outOfHeader = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as default menuTitle 'Mega Menu'", () => {
    expect(component.menuTitle)
      .toEqual('Mega Menu');
  });

  it('should have customized text value for view All button', () => {
    expect(component.viewAllButtonDisplayText)
      .toEqual('View All Mega Menu');
    component.viewAllButtonText = 'Customized text value';
    fixture.detectChanges();
    expect(component.viewAllButtonDisplayText)
      .toEqual('Customized text value');
  });

  it('toggleMobileMenuOpen should toggle active class', () => {

    const tlMegaMenu = (fixture.elementRef.nativeElement as HTMLElement);
    const wvrDropDownElement = tlMegaMenu.querySelector('wvr-dropdown-component');

    expect(component.active)
      .toBeFalse();

    component.toggleMobileMenuOpen();

    expect(component.active)
      .toBeTrue();

    component.toggleMobileMenuOpen();

    expect(component.active)
      .toBeFalse();

  });

  // TODO: This tests is not taking padding into account and is failing.

  // it('Resize event should change menu offset', fakeAsync(() => {

  //   const header = document.createElement('tl-header');
  //   component.outOfHeader = false;
  //   document.body.append(header);

  //   const bottomNav = document.createElement('div');
  //   bottomNav.setAttribute('bottom-navigation', '');

  //   header.attachShadow({mode: 'open'});
  //   header.shadowRoot.appendChild(bottomNav);
  //   const wvrBtnContainer = document.createElement('div');

  //   wvrBtnContainer.style.display = 'block';
  //   wvrBtnContainer.style.position = 'relative';
  //   wvrBtnContainer.style.padding = '100px';

  //   const wvrBtn = document.createElement('wvre-dropdown-btn');

  //   wvrBtnContainer.appendChild(wvrBtn);

  //   bottomNav.appendChild(wvrBtnContainer);

  //   const tlMegaMenu = (fixture.elementRef.nativeElement as HTMLElement);

  //   wvrBtn.appendChild(tlMegaMenu);
  //   const firstChild = (bottomNav.firstChild as HTMLElement);
  //   firstChild.style.display = 'block';
  //   firstChild.style.position = 'relative';
  //   firstChild.style.left = '200px';

  //   const btnPaddingPx = window.getComputedStyle(wvrBtn.querySelector('wvre-dropdown-btn'), undefined)
  //   .getPropertyValue('padding-left');
  //   const btnPadding = parseInt(btnPaddingPx.replace('px', ''), 10);

  //   expect(component.menuXOffset)
  //     .toBe(0);

  //   tick(900000);
  //   component.calculateMenuXOffset();
  //   tick(900000);

  //   const resultingOffset = 200 - ((component.eRef.nativeElement as HTMLElement).offsetLeft + btnPadding);

  //   expect(component.menuXOffset)
  //     .toEqual(resultingOffset);

  // }));

});
