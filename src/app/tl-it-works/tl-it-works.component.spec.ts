import { TestBed, async } from '@angular/core/testing';
import { TamuItWorksComponent } from './tl-it-works.component';

import { ItWorksModule } from 'wvr-elements'; 

describe('TamuItWorksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ItWorksModule
      ],
      declarations: [
        TamuItWorksComponent,
      ]
    }).compileComponents();
  }));

  it('should create the TamuItWorksComponent', () => {
    const fixture = TestBed.createComponent(TamuItWorksComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tl-it-works-component'`, () => {
    const fixture = TestBed.createComponent(TamuItWorksComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tl-it-works-component');
  });

});
