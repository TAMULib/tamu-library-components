import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig, WvrTabComponent } from '@wvr/elements';
import { TlTabComponent } from './tl-tab.component';

describe('TlTabComponent', () => {
  let component: TlTabComponent;
  let fixture: ComponentFixture<TlTabComponent>;
  const initialState = {
    theme: {
      themes: {}
    }
  };

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule,
      BrowserModule
    ],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ],
    declarations: [
      TlTabComponent,
      WvrTabComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
