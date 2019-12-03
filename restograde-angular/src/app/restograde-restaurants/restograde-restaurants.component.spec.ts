import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeRestaurantsComponent } from './restograde-restaurants.component';

describe('RestogradeRestaurantsComponent', () => {
  let component: RestogradeRestaurantsComponent;
  let fixture: ComponentFixture<RestogradeRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
