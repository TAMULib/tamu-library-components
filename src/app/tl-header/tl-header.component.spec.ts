import { TestBed, async } from '@angular/core/testing';
import { TamuHeaderComponent } from './tl-header.component';

import { WvrLibModule } from 'wvr-elements';

describe('TamuHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WvrLibModule
      ],
      declarations: [
        TamuHeaderComponent,
      ]
    }).compileComponents();
  }));
});
