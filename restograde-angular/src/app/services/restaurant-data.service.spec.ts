import { TestBed, inject } from '@angular/core/testing';

import { RestaurantDataService } from './restaurant-data.service';

describe('RestaurantDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantDataService]
    });
  });

  it('should be created', inject([RestaurantDataService], (service: RestaurantDataService) => {
    expect(service).toBeTruthy();
  }));
});
