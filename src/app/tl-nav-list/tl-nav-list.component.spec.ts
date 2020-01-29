import { TestBed, async } from '@angular/core/testing';
import { TamuNavListComponent } from './tl-nav-list.component';

describe('TamuItWorksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        TamuNavListComponent,
      ]
    }).compileComponents();
  }));

  it('should create the TamuItWorksComponent', () => {
    const fixture = TestBed.createComponent(TamuNavListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tl-nav-list-component'`, () => {
    const fixture = TestBed.createComponent(TamuNavListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tl-nav-list-component');
  });

});
