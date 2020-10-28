import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { metaReducers, ROOT_REDUCER } from '@wvr/elements';

import { TlTabComponent } from './tl-tab.component';

describe('TlTabComponent', () => {
  let component: TlTabComponent;
  let fixture: ComponentFixture<TlTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(ROOT_REDUCER, { metaReducers })
      ],
      declarations: [ TlTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
