import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WvrLibModule } from 'wvr-elements';
import { TamuItWorksComponent } from './tl-it-works.component';

describe('TamuItWorksComponent', () => {
  let component: TamuItWorksComponent;
  let fixture: ComponentFixture<TamuItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WvrLibModule]
      declarations: [TamuItWorksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'tl-it-works-component'`, () => {
    expect(component.title).toEqual('tl-it-works-component');
  });

  it(`should have as text ''`, () => {
    expect(component.text).toEqual('');
  });
});