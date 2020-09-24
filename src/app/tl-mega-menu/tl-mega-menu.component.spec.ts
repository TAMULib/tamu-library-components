import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TlMegaMenuComponent } from './tl-mega-menu.component';

describe('MegaMenuComponent', () => {
  let component: TlMegaMenuComponent;
  let fixture: ComponentFixture<TlMegaMenuComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [BrowserAnimationsModule],
    declarations: [ TlMegaMenuComponent ]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMegaMenuComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
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

  it('toggleMobileMenuOpen should toggle active class on click', () => {

    const tlMegaMenu = (fixture.elementRef.nativeElement as HTMLElement);
    const wvrDropDownElement = tlMegaMenu.querySelector('wvr-dropdown-element');
    const wvrDropdownBtn = wvrDropDownElement.querySelectorAll('wvr-dropdown-btn')[0];

    expect(wvrDropDownElement.classList.contains('active'))
    .toBeFalse();

    wvrDropdownBtn.dispatchEvent(new MouseEvent('click'));

    expect(wvrDropDownElement.classList.contains('active'))
      .toBeTrue();

    wvrDropdownBtn.dispatchEvent(new MouseEvent('click'));

    expect(wvrDropDownElement.classList.contains('active'))
    .toBeFalse();

  });

  it('toggleMobileMenuSectionOpen should toggle active class on click', () => {

    component.outOfHeader = true;

    const section = document.createElement('tl-mega-menu-section');
    const testElem = document.createElement('p');
    testElem.classList.add('section-title');

    section.appendChild(testElem);

    expect(section.classList.contains('active'))
      .toBeFalse();

    const firstClick = new MouseEvent('click');
    Object.defineProperty(firstClick, 'target', {value: testElem, enumerable: true});
    component.toggleMobileMenuSectionOpen(firstClick);

    expect(section.classList.contains('active'))
      .toBeTrue();

    const secondClick = new MouseEvent('click');
    Object.defineProperty(secondClick, 'target', {value: testElem, enumerable: true});
    component.toggleMobileMenuSectionOpen(secondClick);

    expect(section.classList.contains('active'))
      .toBeFalse();

  });

  it('Resize event should change menu offset', fakeAsync(() => {

    const header = document.createElement('tl-header');

    document.body.append(header);

    const bottomNav = document.createElement('div');
    bottomNav.setAttribute('bottom-navigation', '');

    header.attachShadow({mode: 'open'});
    header.shadowRoot.appendChild(bottomNav);
    const wvrBtnContainer = document.createElement('div');

    wvrBtnContainer.style.display = 'block';
    wvrBtnContainer.style.position = 'relative';
    wvrBtnContainer.style.padding = '100px';

    const wvrBtn = document.createElement('wvr-dropdown-btn');

    wvrBtnContainer.appendChild(wvrBtn);

    bottomNav.appendChild(wvrBtnContainer);

    const tlMegaMenu = (fixture.elementRef.nativeElement as HTMLElement);

    wvrBtn.appendChild(tlMegaMenu);
    const firstChild = (bottomNav.firstChild as HTMLElement);
    firstChild.style.display = 'block';
    firstChild.style.position = 'relative';
    firstChild.style.left = '200px';

    component.calculateMenuXOffset();

    expect(component.menuXOffset)
      .toBe(0);

    tick(1000);

    expect(component.menuXOffset)
        .toBeGreaterThan(0);

  }));

});
