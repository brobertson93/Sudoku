import { TestBed } from '@angular/core/testing';

import { NasdaqService } from './nasdaq.service';

describe('NasdaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasdaqService = TestBed.get(NasdaqService);
    expect(service).toBeTruthy();
  });
});
