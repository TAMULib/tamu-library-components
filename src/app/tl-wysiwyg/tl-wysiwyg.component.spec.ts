import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TlWysiwygComponent } from './tl-wysiwyg.component';

describe('TlWysiwygComponent', () => {
  let component: TlWysiwygComponent;
  let fixture: ComponentFixture<TlWysiwygComponent>;
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
      declarations: [ TlWysiwygComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

});

