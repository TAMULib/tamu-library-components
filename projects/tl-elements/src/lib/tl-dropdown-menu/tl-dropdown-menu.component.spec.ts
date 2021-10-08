import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../shared/tl-shared.module';
import { TlDropDownMenuComponent } from './tl-dropdown-menu.component';

describe('TlDropDownMenuComponent', () => {
  let component: TlDropDownMenuComponent;
  let fixture: ComponentFixture<TlDropDownMenuComponent>;
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
    declarations: [TlDropDownMenuComponent],
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
    fixture = TestBed.createComponent(TlDropDownMenuComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as default menuTitle 'Dropdown Menu'", () => {
    expect(component.menuTitle)
      .toEqual('Dropdown Menu');
  });

  it("should have as default menuWidth 'auto'", () => {
    expect(component.menuWidth)
      .toEqual('auto');
  });

  it('toggleMobileMenuOpen should toggle active class', () => {
    const tlDropDownMenu = (fixture.elementRef.nativeElement as HTMLElement);
    const wvrDropDownMenuElement = tlDropDownMenu.querySelector('wvr-dropdown-component');

    expect(component.active)
      .toBeFalse();

    component.toggleMobileMenuOpen();

    expect(component.active)
      .toBeTrue();

    component.toggleMobileMenuOpen();

    expect(component.active)
      .toBeFalse();
  });

});
