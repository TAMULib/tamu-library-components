import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlButtonComponent } from './tl-button.component';

describe('TlButtonComponent', () => {
  let component: TlButtonComponent;
  let fixture: ComponentFixture<TlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlButtonComponent ]
    })
    .compileComponents();
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
