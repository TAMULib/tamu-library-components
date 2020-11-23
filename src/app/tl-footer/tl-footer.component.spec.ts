import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TamuFooterComponent } from './tl-footer.component';

describe('TlFooterComponent', () => {
  let component: TamuFooterComponent;
  let fixture: ComponentFixture<TamuFooterComponent>;
  const initialState = { theme: {
    themes: {}
  }};

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule
    ],
    declarations: [TamuFooterComponent],
    providers: [
      provideMockStore({initialState}),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
    .compileComponents()
    .catch(err => { console.error(err); })));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as backgroundColor 'var(--tl-primary)'", () => {
    expect(component.backgroundColor)
      .toEqual('var(--tl-primary)');
  });

});
