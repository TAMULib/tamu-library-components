import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig, WvrButtonComponent } from '@wvr/elements';
import { TlButtonComponent } from './tl-button.component';

describe('TlButtonComponent', () => {
  let component: TlButtonComponent;
  let fixture: ComponentFixture<TlButtonComponent>;
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
      TlButtonComponent,
      WvrButtonComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
