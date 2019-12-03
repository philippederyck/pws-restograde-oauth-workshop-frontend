import { TestBed, inject } from '@angular/core/testing';

import { ReviewDataService } from './review-data.service';

describe('ReviewDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewDataService]
    });
  });

  it('should be created', inject([ReviewDataService], (service: ReviewDataService) => {
    expect(service).toBeTruthy();
  }));
});
