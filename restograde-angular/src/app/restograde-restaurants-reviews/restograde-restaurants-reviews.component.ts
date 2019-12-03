import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restograde-restaurants-reviews',
  templateUrl: './restograde-restaurants-reviews.component.html',
  styleUrls: ['./restograde-restaurants-reviews.component.scss']
})
export class RestogradeRestaurantsReviewsComponent implements OnInit {

  reviews : Review[];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.route.snapshot.data['reviews'];
  }

}
