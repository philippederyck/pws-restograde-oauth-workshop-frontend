import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeReviewsNewComponent } from './restograde-reviews-new.component';

describe('RestogradeReviewsNewComponent', () => {
  let component: RestogradeReviewsNewComponent;
  let fixture: ComponentFixture<RestogradeReviewsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeReviewsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeReviewsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
