import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../shared/tl-shared.module';
import { TlHeaderComponent } from './tl-header.component';

describe('TlHeaderComponent', () => {
  let component: TlHeaderComponent;
  let fixture: ComponentFixture<TlHeaderComponent>;
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
    declarations: [TlHeaderComponent],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ]
  })
    .compileComponents()
    .catch(err => { console.error(err); })));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should have a set logoSrc', () => {
    expect(component.logoSrc)
      // tslint:disable-next-line:no-string-literal
      .toEqual(`${component['appConfig'].assetsUrl}/icons/tl/tamu-logo.svg`);
  });

  it('should have as logoText "Texas A&M University Libraries"', () => {
    expect(component.logoText)
      .toEqual(' Texas A&M University Libraries');
  });

  it("should have as titleRowBackground 'var(--tl-primary)'", () => {
    expect(component.titleRowBackground)
      .toEqual('var(--tl-primary)');
  });

  it("should have as topNavBackground 'var(--tl-primary-dark-accent)'", () => {
    expect(component.topNavBackground)
      .toEqual('var(--tl-primary-dark-accent)');
  });

  it("should have as bottomNavBackground ''var(--tl-grey)'", () => {
    expect(component.bottomNavBackground)
      .toEqual('var(--tl-grey)');
  });

  it("should have as pageTitle 'TL Header Component'", () => {
    expect(component.pageTitle)
      .toEqual('TL Header Component');
  });

  it('should have conditional font styling', () => {
    expect(component.inheritFontStyle)
      .toEqual(undefined);
    expect(component._fontFamily)
      .toEqual('var(--tl-default-font-family-sans-serif)');
    expect(component._fontSize)
      .toEqual('var(--tl-default-font-size)');

    component.inheritFontStyle = 'true';
    fixture.detectChanges();
    expect(component._fontFamily)
      .toEqual('inherit');
    expect(component._fontSize)
      .toEqual('inherit');

    component.inheritFontStyle = 'false';
    fixture.detectChanges();
    expect(component._fontFamily)
      .toEqual('var(--tl-default-font-family-sans-serif)');
    expect(component._fontSize)
      .toEqual('var(--tl-default-font-size)');
  });

  it('should toggle mobile menu state', () => {
    const mobileMenuState = component.mobileMenuClosed;
    expect(component.mobileMenuClosed)
      .toBeTrue();
    component.toggleMobileMenu();
    expect(component.mobileMenuClosed)
      .toBeFalse();
  });

});
