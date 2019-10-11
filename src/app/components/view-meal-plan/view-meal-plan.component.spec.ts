import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMealPlanComponent } from './view-meal-plan.component';

describe('ViewMealPlanComponent', () => {
  let component: ViewMealPlanComponent;
  let fixture: ComponentFixture<ViewMealPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMealPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
