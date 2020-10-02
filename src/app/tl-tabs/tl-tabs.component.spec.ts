import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTabsComponent } from './tl-tabs.component';

describe('TlTabsComponent', () => {
  let component: TlTabsComponent;
  let fixture: ComponentFixture<TlTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
