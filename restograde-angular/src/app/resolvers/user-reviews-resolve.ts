import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RestaurantDataService } from '../services/restaurant-data.service';
import { Restaurant } from '../models/restaurant';
import { Review } from '../models/review';
import { ReviewDataService } from '../services/review-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class UserReviewsResolve implements Resolve<Review[]>{

    constructor(private authService: AuthenticationService, private reviewData: ReviewDataService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.reviewData.getReviewsForUser();
    }
}
