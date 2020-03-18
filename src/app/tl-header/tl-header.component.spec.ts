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

  it("should have as logoSrc 'https://php.library.tamu.edu/searcher/_application/resources/css/tamu-logo-with-bar.png'", () => {
    expect(component.logoSrc)
      .toEqual('https://php.library.tamu.edu/searcher/_application/resources/css/tamu-logo-with-bar.png');
  });

  it("should have as logoText ' Texas A&M University Libraries'", () => {
    expect(component.logoText)
      .toEqual(' Texas A&M University Libraries');
  });

  it("should have as titleRowBackground 'var(--tl-primary)'", () => {
    expect(component.titleRowBackground)
      .toEqual('var(--tl-primary)');
  });

  it("should have as topNavBackground 'var(--tl-secondary)'", () => {
    expect(component.topNavBackground)
      .toEqual('var(--tl-secondary)');
  });

  it("should have as bottomNavBackground ''var(--tl-grey)'", () => {
    expect(component.bottomNavBackground)
      .toEqual('var(--tl-grey)');
  });

  it("should have as pageTitle 'TL Header Component'", () => {
    expect(component.pageTitle)
      .toEqual('TL Header Component');
  });

});
