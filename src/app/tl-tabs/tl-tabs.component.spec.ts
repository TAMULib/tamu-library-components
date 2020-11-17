import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TlTabsComponent } from './tl-tabs.component';

describe('TlTabsComponent', () => {
  let component: TlTabsComponent;
  let fixture: ComponentFixture<TlTabsComponent>;
  const initialState = { theme: {
    themes: {}
  }};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore({initialState}),
        {
          provide: APP_CONFIG,
          useValue: testAppConfig
        }
      ],
      declarations: [ TlTabsComponent ]
    })
    .compileComponents();
  });

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
