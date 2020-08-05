import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlMegaMenuComponent } from './tl-mega-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MegaMenuComponent', () => {
  let component: TlMegaMenuComponent;
  let fixture: ComponentFixture<TlMegaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ TlMegaMenuComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMegaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
