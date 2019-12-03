import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeUsersReviewsComponent } from './restograde-users-reviews.component';

describe('RestogradeUsersReviewsComponent', () => {
  let component: RestogradeUsersReviewsComponent;
  let fixture: ComponentFixture<RestogradeUsersReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeUsersReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeUsersReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
