import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlMegaMenuSectionComponent } from './tl-mega-menu-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TlMegaMenuSectionComponent', () => {
  let component: TlMegaMenuSectionComponent;
  let fixture: ComponentFixture<TlMegaMenuSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [TlMegaMenuSectionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMegaMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
