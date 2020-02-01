import { TestBed, async } from '@angular/core/testing';
import { TamuNavListComponent } from './tl-nav-list.component';

import { WvrLibModule } from 'wvr-elements';

describe('TamuNavListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WvrLibModule
      ],
      declarations: [
        TamuNavListComponent,
      ]
    }).compileComponents();
  }));
});
