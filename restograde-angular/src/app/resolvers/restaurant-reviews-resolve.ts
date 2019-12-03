import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RestaurantDataService } from '../services/restaurant-data.service';
import { Restaurant } from '../models/restaurant';
import { Review } from '../models/review';
import { ReviewDataService } from '../services/review-data.service';

@Injectable()
export class RestaurantReviewsResolve implements Resolve<Review[]>{

    constructor(private reviewData: ReviewDataService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.reviewData.getReviewsByRestaurantId(+route.paramMap.get('id'));
    }
}
