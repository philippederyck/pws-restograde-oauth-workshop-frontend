import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeReviewsEditComponent } from './restograde-reviews-edit.component';

describe('RestogradeReviewsEditComponent', () => {
  let component: RestogradeReviewsEditComponent;
  let fixture: ComponentFixture<RestogradeReviewsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeReviewsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeReviewsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
