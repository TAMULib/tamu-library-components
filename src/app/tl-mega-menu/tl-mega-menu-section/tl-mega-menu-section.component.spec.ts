import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlMegaMenuSectionComponent } from './tl-mega-menu-section.component';

describe('TlMegaMenuSectionComponent', () => {
  let component: TlMegaMenuSectionComponent;
  let fixture: ComponentFixture<TlMegaMenuSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlMegaMenuSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMegaMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
