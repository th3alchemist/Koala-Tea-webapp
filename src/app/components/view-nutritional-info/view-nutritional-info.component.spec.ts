import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNutritionalInfoComponent } from './view-nutritional-info.component';

describe('ViewNutritionalInfoComponent', () => {
  let component: ViewNutritionalInfoComponent;
  let fixture: ComponentFixture<ViewNutritionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNutritionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNutritionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
