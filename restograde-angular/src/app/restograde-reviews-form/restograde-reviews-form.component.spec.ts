import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeReviewsFormComponent } from './restograde-reviews-form.component';

describe('RestogradeReviewsFormComponent', () => {
  let component: RestogradeReviewsFormComponent;
  let fixture: ComponentFixture<RestogradeReviewsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeReviewsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeReviewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
