import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TlModalComponent } from './tl-modal.component';

describe('TlModalComponent', () => {
  let component: TlModalComponent;
  let fixture: ComponentFixture<TlModalComponent>;
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
      declarations: [ TlModalComponent ]
    })
    .compileComponents();
  });

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
