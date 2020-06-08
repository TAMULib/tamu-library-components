import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TamuHeaderComponent } from './tl-header.component';

describe('TamuHeaderComponent', () => {
  let component: TamuHeaderComponent;
  let fixture: ComponentFixture<TamuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TamuHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
      .catch(err => { console.error(err); });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as logoSrc 'https://labs.library.tamu.edu/tl-components/latest/assets/tamu-logo.svg'", () => {
    expect(component.logoSrc)
      .toEqual('https://labs.library.tamu.edu/tl-components/latest/assets/tamu-logo.svg');
  });

  it("should have as logoText 'Texas A&M University Libraries'", () => {
    expect(component.logoText)
      .toEqual(' Texas A&M University Libraries');
  });

  it("should have as titleRowBackground 'var(--tl-primary)'", () => {
    expect(component.titleRowBackground)
      .toEqual('var(--tl-primary)');
  });

  it("should have as topNavBackground 'var(--tl-primary-dark-accent)'", () => {
    expect(component.topNavBackground)
      .toEqual('var(--tl-primary-dark-accent)');
  });

  it("should have as bottomNavBackground ''var(--tl-grey)'", () => {
    expect(component.bottomNavBackground)
      .toEqual('var(--tl-grey)');
  });

  it("should have as pageTitle 'TL Header Component'", () => {
    expect(component.pageTitle)
      .toEqual('TL Header Component');
  });

  it("should have conditional font styling", () => {
    expect(component.inheritFontStyle).toEqual(undefined);
    expect(component._fontFamily).toEqual('var(--tl-default-font-family-sans-serif)');
    expect(component._fontSize).toEqual('var(--tl-default-font-size)');
    
    component.inheritFontStyle = 'true';
    fixture.detectChanges();
    expect(component._fontFamily).toEqual('inherit');
    expect(component._fontSize).toEqual('inherit');
    
    component.inheritFontStyle = 'false';
    fixture.detectChanges();
    expect(component._fontFamily).toEqual('var(--tl-default-font-family-sans-serif)');
    expect(component._fontSize).toEqual('var(--tl-default-font-size)');
  });

});
