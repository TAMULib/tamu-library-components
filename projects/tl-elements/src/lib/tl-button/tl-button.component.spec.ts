import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../shared/tl-shared.module';
import { TlButtonComponent } from './tl-button.component';

describe('TlButtonComponent', () => {
  let component: TlButtonComponent;
  let fixture: ComponentFixture<TlButtonComponent>;
  const initialState = {
    theme: {
      themes: {}
    }
  };

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [TLSharedModule],
    declarations: [TlButtonComponent],
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
    fixture = TestBed.createComponent(TlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
