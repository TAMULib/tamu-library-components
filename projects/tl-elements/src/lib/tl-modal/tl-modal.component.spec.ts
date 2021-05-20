import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig, WvrModalComponent } from '@wvr/elements';
import { TlModalComponent } from './tl-modal.component';

describe('TlModalComponent', () => {
  let component: TlModalComponent;
  let fixture: ComponentFixture<TlModalComponent>;
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
      TlModalComponent,
      WvrModalComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

});
