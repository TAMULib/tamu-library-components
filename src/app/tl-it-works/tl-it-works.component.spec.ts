import { TestBed, async } from '@angular/core/testing';
import { TamuItWorksComponent } from './tl-it-works.component';

import { WvrLibModule } from 'wvr-elements';

describe('TamuItWorksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WvrLibModule
      ],
      declarations: [
        TamuItWorksComponent,
      ]
    }).compileComponents();
  }));
});
