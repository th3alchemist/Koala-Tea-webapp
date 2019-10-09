import { TestBed } from '@angular/core/testing';

import { CookbookService } from './cookbook.service';

describe('CookbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookbookService = TestBed.get(CookbookService);
    expect(service).toBeTruthy();
  });
});
