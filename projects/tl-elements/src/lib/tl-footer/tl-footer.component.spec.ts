import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { APP_CONFIG, testAppConfig } from '@wvr/elements';
import { TLSharedModule } from '../shared/tl-shared.module';
import { TamuFooterComponent } from './tl-footer.component';

describe('TlFooterComponent', () => {
  let component: TamuFooterComponent;
  let fixture: ComponentFixture<TamuFooterComponent>;
  const initialState = {
    theme: {
      themes: {}
    }
  };

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    imports: [TLSharedModule],
    declarations: [TamuFooterComponent],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: APP_CONFIG,
        useValue: testAppConfig
      }
    ]
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

});
