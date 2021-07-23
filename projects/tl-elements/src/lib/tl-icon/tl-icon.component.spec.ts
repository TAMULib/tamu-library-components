import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../shared/tl-shared.module';
import { TlIconComponent } from './tl-icon.component';

describe('TlIconComponent', () => {
  let component: TlIconComponent;
  let fixture: ComponentFixture<TlIconComponent>;
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
    declarations: [TlIconComponent],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as set 'tl'", () => {
    expect(component.set)
      .toEqual('tl');
  });

  it("should have as name 'tamu-logo'", () => {
    expect(component.name)
      .toEqual('tamu-logo');
  });

  it('should have a customized color for the tl-icon', () => {
    expect(component.color)
      .toEqual(undefined);
    component.color = '#500000';
    fixture.detectChanges();
    expect(component.color)
      .toEqual('#500000');
  });

  it('should have a customized size for the tl-icon', () => {
    expect(component.size)
      .toEqual(undefined);
    component.color = '34px';
    fixture.detectChanges();
    expect(component.color)
      .toEqual('34px');
  });
});
