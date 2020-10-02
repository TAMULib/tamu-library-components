import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTabComponent } from './tl-tab.component';

describe('TlTabComponent', () => {
  let component: TlTabComponent;
  let fixture: ComponentFixture<TlTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
