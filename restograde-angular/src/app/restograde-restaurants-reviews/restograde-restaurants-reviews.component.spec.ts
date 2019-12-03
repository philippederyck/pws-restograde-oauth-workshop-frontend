import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeRestaurantsReviewsComponent } from './restograde-restaurants-reviews.component';

describe('RestogradeRestaurantsReviewsComponent', () => {
  let component: RestogradeRestaurantsReviewsComponent;
  let fixture: ComponentFixture<RestogradeRestaurantsReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeRestaurantsReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeRestaurantsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
