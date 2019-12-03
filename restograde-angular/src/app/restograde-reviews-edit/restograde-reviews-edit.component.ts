import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { Restaurant } from '../models/restaurant';
import { ReviewDataService } from '../services/review-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restograde-reviews-edit',
  templateUrl: './restograde-reviews-edit.component.html',
  styleUrls: ['./restograde-reviews-edit.component.scss']
})
export class RestogradeReviewsEditComponent implements OnInit {
  
  error: string;
  success: string;
  review: Review;
  restaurants: Restaurant[];
  
  constructor(private reviewData: ReviewDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.error = "";
    this.success = "";
    this.review = this.route.snapshot.data['review'];
    this.restaurants = this.route.snapshot.data['restaurants'];
  }

  saveReview(data) {
    this.reviewData.updateReview(data)
      .subscribe(
        review => {
          this.error = "";
          this.success = "Review updated successfully";
        },
        error => {
          console.log("Failed to update review");
          this.success = "";
          this.error = `Failed to update review (status: ${error.status})`;
        }
      )
  }

}
