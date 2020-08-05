import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TlIconComponent } from './tl-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TlIconComponent', () => {
  let component: TlIconComponent;
  let fixture: ComponentFixture<TlIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [TlIconComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as set 'tl'", () => {
    expect(component.set)
      .toEqual('tl');
  });

  it("should have as name 'tamu-logo'", () => {
    expect(component.name)
      .toEqual('tamu-logo');
  });
});
