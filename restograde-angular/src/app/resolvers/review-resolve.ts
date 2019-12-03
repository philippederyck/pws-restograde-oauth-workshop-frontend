import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Review } from '../models/review';
import { ReviewDataService } from '../services/review-data.service';

@Injectable()
export class ReviewResolve implements Resolve<Review>{

    constructor(private reviewData: ReviewDataService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.reviewData.getReview(+route.paramMap.get('id'));
    }
}
