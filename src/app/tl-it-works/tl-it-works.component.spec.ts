import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TamuItWorksComponent } from './tl-it-works.component';

describe('TamuItWorksComponent', () => {
  let component: TamuItWorksComponent;
  let fixture: ComponentFixture<TamuItWorksComponent>;
  const initialState = { themes: {} };

  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule
    ],
    declarations: [TamuItWorksComponent],
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
    fixture = TestBed.createComponent(TamuItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as title 'tl-it-works-component'", () => {
    expect(component.title)
      .toEqual('tl-it-works-component');
  });

  it("should have as text ''", () => {
    expect(component.text)
      .toEqual('');
  });

});
