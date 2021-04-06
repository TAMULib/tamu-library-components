import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlModalComponent } from './tl-modal.component';

describe('TlModalComponent', () => {
  let component: TlModalComponent;
  let fixture: ComponentFixture<TlModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
