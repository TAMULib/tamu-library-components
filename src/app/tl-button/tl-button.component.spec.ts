import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TlButtonComponent } from './tl-button.component';

describe('TlButtonComponent', () => {
  let component: TlButtonComponent;
  let fixture: ComponentFixture<TlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TlButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
