import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TlAlertComponent } from './tl-alert.component';

describe('TlAlertComponent', () => {
  let component: TlAlertComponent;
  let fixture: ComponentFixture<TlAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ TlAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should customize alertClass', () => {
    expect(component.alertClass)
      .toBeUndefined();
    component.alertClass = 'success';
    fixture.detectChanges();
    expect(component.alertClass)
      .toEqual('success');
  });

  it('should customize alertType', () => {
    expect(component.alertType)
      .toBeUndefined();
    component.alertType = 'closable';
    fixture.detectChanges();
    expect(component.alertType)
      .toEqual('closable');
  });
});
