import { TestBed } from '@angular/core/testing';

import { TlElementsService } from './tl-elements.service';

describe('TlElementsService', () => {
  let service: TlElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TlElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
