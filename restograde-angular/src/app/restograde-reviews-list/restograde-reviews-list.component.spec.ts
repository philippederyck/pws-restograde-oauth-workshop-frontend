import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeReviewsListComponent } from './restograde-reviews-list.component';

describe('RestogradeReviewsListComponent', () => {
  let component: RestogradeReviewsListComponent;
  let fixture: ComponentFixture<RestogradeReviewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeReviewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeReviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
