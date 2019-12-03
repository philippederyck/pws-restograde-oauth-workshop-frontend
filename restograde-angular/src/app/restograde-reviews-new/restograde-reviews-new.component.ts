import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { ReviewDataService } from '../services/review-data.service';
import { Restaurant } from '../models/restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restograde-reviews-new',
  templateUrl: './restograde-reviews-new.component.html',
  styleUrls: ['./restograde-reviews-new.component.scss']
})
export class RestogradeReviewsNewComponent implements OnInit {

  error: string;
  success: string;
  review: Review;
  restaurants: Restaurant[];
  
  constructor(private reviewData: ReviewDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.error = "";
    this.success = "";
    this.review = new Review();
    this.restaurants = this.route.snapshot.data['restaurants'];
    this.review.restaurantId = this.restaurants[0].id;
  }

  createReview(data) {
    this.reviewData.createReview(data)
      .subscribe(
        review => {
          this.error = "";
          this.success = "Review created successfully";
        },
        error => {
          console.log("Failed to create review");
          this.success = "";
          this.error = `Failed to create review (status: ${error.status})`;
        }
      )
  }

}
