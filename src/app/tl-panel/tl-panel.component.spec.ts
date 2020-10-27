import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlPanelComponent } from './tl-panel.component';

describe('TlPanelComponent', () => {
  let component: TlPanelComponent;
  let fixture: ComponentFixture<TlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
