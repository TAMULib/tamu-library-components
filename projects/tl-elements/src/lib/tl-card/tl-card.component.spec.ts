import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig, WvrCardComponent } from '@wvr/elements';
import { TlCardComponent } from './tl-card.component';

describe('TlCardComponent', () => {
  let component: TlCardComponent;
  let fixture: ComponentFixture<TlCardComponent>;
  const initialState = {
    theme: {
      themes: {}
    }
  };

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule
    ],
    declarations: [
      TlCardComponent,
      WvrCardComponent
    ],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
