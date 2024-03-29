import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../../shared/tl-shared.module';
import { TlMegaMenuComponent } from '../tl-mega-menu.component';
import { TlMegaMenuSectionComponent } from './tl-mega-menu-section.component';

describe('TlMegaMenuSectionComponent', () => {
  let component: TlMegaMenuSectionComponent;
  let fixture: ComponentFixture<TlMegaMenuSectionComponent>;
  let parentComponent: TlMegaMenuComponent;
  let parentFixture: ComponentFixture<TlMegaMenuComponent>;
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
    declarations: [
      TlMegaMenuSectionComponent
    ],
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
    fixture = TestBed.createComponent(TlMegaMenuSectionComponent);
    component = fixture.componentInstance;
    parentFixture = TestBed.createComponent(TlMegaMenuComponent);
    parentComponent = parentFixture.componentInstance;
    // tslint:disable-next-line:no-string-literal
    component['parent'] = parentComponent;
    fixture.detectChanges();
    parentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should have as user defined sectionTitle', () => {
    expect(component.sectionTitle)
      .toEqual('Section Title');
    component.sectionTitle = 'User Defined Section Title1';
    fixture.detectChanges();
    expect(component.sectionTitle)
      .toEqual('User Defined Section Title1');
  });

  it('should have as viewAllHref property', () => {
    expect(component.viewAllHref)
      .toEqual(undefined);
    component.viewAllHref = '/view-all';
    fixture.detectChanges();
    expect(component.viewAllHref)
      .toEqual('/view-all');
  });

  it('toggleOpenClose should toggle active state on click', () => {

    const section = document.createElement('tl-mega-menu-section');
    const testElem = document.createElement('p');
    testElem.classList.add('section-title');

    section.appendChild(testElem);

    expect(component.active)
      .toBeFalse();

    component.toggleOpenClose();

    expect(component.active)
      .toBeTrue();

    component.toggleOpenClose();

    expect(component.active)
      .toBeFalse();

  });

});
