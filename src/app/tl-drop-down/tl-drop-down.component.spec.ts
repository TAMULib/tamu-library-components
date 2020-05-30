import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlDropDownComponent } from './tl-drop-down.component';

describe('TlDropDownComponent', () => {
  let component: TlDropDownComponent;
  let fixture: ComponentFixture<TlDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});