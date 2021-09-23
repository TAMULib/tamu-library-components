import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../../shared/tl-shared.module';
import { TlDropDownMenuComponent } from '../tl-dropdown-menu.component';
import { TlDropDownMenuSectionComponent } from './tl-dropdown-menu-section.component';

describe('TlDropDownMenuSectionComponent', () => {
  let component: TlDropDownMenuSectionComponent;
  let fixture: ComponentFixture<TlDropDownMenuSectionComponent>;
  let parentComponent: TlDropDownMenuComponent;
  let parentFixture: ComponentFixture<TlDropDownMenuComponent>;
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
      TlDropDownMenuSectionComponent
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
    fixture = TestBed.createComponent(TlDropDownMenuSectionComponent);
    component = fixture.componentInstance;
    parentFixture = TestBed.createComponent(TlDropDownMenuComponent);
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

});
