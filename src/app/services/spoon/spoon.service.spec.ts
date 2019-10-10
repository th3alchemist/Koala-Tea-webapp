import { TestBed } from '@angular/core/testing';

import { SpoonService } from './spoon.service';

describe('SpoonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpoonService = TestBed.get(SpoonService);
    expect(service).toBeTruthy();
  });
});
