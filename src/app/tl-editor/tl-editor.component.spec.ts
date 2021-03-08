import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TlEditorComponent } from './tl-editor.component';

describe('TlEditorComponent', () => {
  let component: TlEditorComponent;
  let fixture: ComponentFixture<TlEditorComponent>;
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
      declarations: [ TlEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

});

