import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { Alignment, APP_CONFIG, testAppConfig, WvrNavListComponent } from '@wvr/elements';
import { TamuNavListComponent } from './tl-nav-list.component';

describe('TamuNavListComponent', () => {
  let component: TamuNavListComponent;
  let fixture: ComponentFixture<TamuNavListComponent>;
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
      TamuNavListComponent,
      WvrNavListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents()
    .catch(err => { console.error(err); })));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as aligned 'LEFT'", () => {
    expect(component.aligned)
      .toEqual(Alignment.LEFT);
  });

  it("should have as 'vertical false' ", () => {
    expect(component.vertical)
      .toEqual(false);
  });

});
