import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlFooterComponent } from './tl-footer.component';

describe('TlFooterComponent', () => {
  let component: TlFooterComponent;
  let fixture: ComponentFixture<TlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
