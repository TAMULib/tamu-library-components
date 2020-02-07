import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Alignment } from '@wvr/elements';
import { TamuNavListComponent } from './tl-nav-list.component';

describe('TamuNavListComponent', () => {
  let component: TamuNavListComponent;
  let fixture: ComponentFixture<TamuNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TamuNavListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
      .catch(err => { console.error(err); });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as aligned 'LEFT'", () => {
    expect(component.aligned)
      .toEqual(Alignment.LEFT);
  });

  it("should have as 'vertical false' ", () => {
    expect(component.vertical)
      .toEqual(false);
  });

});
