import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngredientComponent } from './view-ingredient.component';

describe('ViewIngredientComponent', () => {
  let component: ViewIngredientComponent;
  let fixture: ComponentFixture<ViewIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
