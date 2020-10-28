import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { metaReducers, ROOT_REDUCER } from '@wvr/elements';
import { TlMegaMenuSectionComponent } from './tl-mega-menu-section.component';

describe('TlMegaMenuSectionComponent', () => {
  let component: TlMegaMenuSectionComponent;
  let fixture: ComponentFixture<TlMegaMenuSectionComponent>;

  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule,
      StoreModule.forRoot(ROOT_REDUCER, { metaReducers })
    ],
    declarations: [TlMegaMenuSectionComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMegaMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should have as user defined sectionTitle', () => {
    expect(component.sectionTitle)
      .toEqual('Section Title');
    component.sectionTitle = 'User Defined Section Title1';
    fixture.detectChanges();
    expect(component.sectionTitle)
      .toEqual('User Defined Section Title1');
  });

  it('should have as viewAllHref property', () => {
    expect(component.viewAllHref)
      .toEqual(undefined);
    component.viewAllHref = '/view-all';
    fixture.detectChanges();
    expect(component.viewAllHref)
      .toEqual('/view-all');
  });
});
