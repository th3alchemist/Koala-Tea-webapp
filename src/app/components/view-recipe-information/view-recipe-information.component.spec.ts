import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeInformationComponent } from './view-recipe-information.component';

describe('ViewRecipeInformationComponent', () => {
  let component: ViewRecipeInformationComponent;
  let fixture: ComponentFixture<ViewRecipeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
