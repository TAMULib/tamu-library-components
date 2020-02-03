import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WvrLibModule } from 'wvr-elements';
import { Alignment } from './alignment.enum';
import { TamuNavListComponent } from './tl-nav-list.component';

describe('TamuNavListComponent', () => {
  let component: TamuNavListComponent;
  let fixture: ComponentFixture<TamuNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WvrLibModule],
      declarations: [TamuNavListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as aligned 'LEFT'`, () => {
    expect(component.aligned).toEqual(Alignment.LEFT);
  });

  it(`should have as vertical false`, () => {
    expect(component.vertical).toEqual(false);
  });
});