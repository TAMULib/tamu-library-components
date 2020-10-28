import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlCardComponent } from './tl-card.component';

describe('TlCardComponent', () => {
  let component: TlCardComponent;
  let fixture: ComponentFixture<TlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
