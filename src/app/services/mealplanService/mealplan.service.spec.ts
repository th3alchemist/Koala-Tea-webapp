import { TestBed } from '@angular/core/testing';

import { MealplanService } from './mealplan.service';

describe('MealplanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealplanService = TestBed.get(MealplanService);
    expect(service).toBeTruthy();
  });
});
