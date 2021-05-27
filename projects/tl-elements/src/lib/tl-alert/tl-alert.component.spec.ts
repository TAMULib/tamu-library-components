import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../shared/tl-shared.module';
import { TlAlertComponent } from './tl-alert.component';

describe('TlAlertComponent', () => {
  let component: TlAlertComponent;
  let fixture: ComponentFixture<TlAlertComponent>;
  const initialState = {
    theme: {
      themes: {}
    }
  };

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule,
      TLSharedModule
    ],
    declarations: [TlAlertComponent],
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
    fixture = TestBed.createComponent(TlAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should customize themeVariant', () => {
    expect(component.themeVariant)
      .toBeUndefined();
    component.themeVariant = 'success';
    fixture.detectChanges();
    expect(component.themeVariant)
      .toEqual('success');
  });

  it('should customize alertType', () => {
    expect(component.alertType)
      .toBeUndefined();
    component.alertType = 'custom';
    fixture.detectChanges();
    expect(component.alertType)
      .toEqual('custom');
  });
});
