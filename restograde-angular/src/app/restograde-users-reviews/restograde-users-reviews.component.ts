import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restograde-users-reviews',
  templateUrl: './restograde-users-reviews.component.html',
  styleUrls: ['./restograde-users-reviews.component.scss']
})
export class RestogradeUsersReviewsComponent implements OnInit {

  reviews : Review[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.route.snapshot.data['reviews'];
  }

}
