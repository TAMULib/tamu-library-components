import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig, WvrTabsComponent } from '@wvr/elements';
import { TlTabsComponent } from './tl-tabs.component';

describe('TlTabsComponent', () => {
  let component: TlTabsComponent;
  let fixture: ComponentFixture<TlTabsComponent>;
  const initialState = {
    theme: {
      themes: {}
    }
  };

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule
    ],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ],
    declarations: [
      TlTabsComponent,
      WvrTabsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
