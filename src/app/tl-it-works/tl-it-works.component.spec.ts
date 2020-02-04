import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TamuItWorksComponent } from './tl-it-works.component';

describe('TamuItWorksComponent', () => {
  let component: TamuItWorksComponent;
  let fixture: ComponentFixture<TamuItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TamuItWorksComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'tl-it-works-component'`, () => {
    expect(component.title).toEqual('tl-it-works-component');
  });

  it(`should have as text ''`, () => {
    expect(component.text).toEqual('');
  });

});