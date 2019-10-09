import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCookbookComponent } from './edit-cookbook.component';

describe('EditCookbookComponent', () => {
  let component: EditCookbookComponent;
  let fixture: ComponentFixture<EditCookbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCookbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
