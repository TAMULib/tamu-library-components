import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlElementsComponent } from './tl-elements.component';

describe('TlElementsComponent', () => {
  let component: TlElementsComponent;
  let fixture: ComponentFixture<TlElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
