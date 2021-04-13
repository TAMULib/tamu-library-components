import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlThemesComponent } from './tl-themes.component';

describe('TlThemesComponent', () => {
  let component: TlThemesComponent;
  let fixture: ComponentFixture<TlThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
