import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { metaReducers, ROOT_REDUCER } from '@wvr/elements';

import { TlCardComponent } from './tl-card.component';

describe('TlCardComponent', () => {
  let component: TlCardComponent;
  let fixture: ComponentFixture<TlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(ROOT_REDUCER, { metaReducers })
      ],
      declarations: [ TlCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
