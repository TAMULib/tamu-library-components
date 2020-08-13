import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TlDropDownComponent } from './tl-drop-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TlDropDownComponent', () => {
  let component: TlDropDownComponent;
  let fixture: ComponentFixture<TlDropDownComponent>;

  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [BrowserAnimationsModule],
    declarations: [TlDropDownComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
