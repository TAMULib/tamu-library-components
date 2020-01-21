import { TestBed, async } from '@angular/core/testing';
import { TamuHeaderComponent } from './tl-header.component';

import { ItWorksModule } from 'wvr-elements'; 

describe('TamuItWorksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ItWorksModule
      ],
      declarations: [
        TamuHeaderComponent,
      ]
    }).compileComponents();
  }));

  it('should create the TamuItWorksComponent', () => {
    const fixture = TestBed.createComponent(TamuHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tl-header-component'`, () => {
    const fixture = TestBed.createComponent(TamuHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tl-header-component');
  });

});
