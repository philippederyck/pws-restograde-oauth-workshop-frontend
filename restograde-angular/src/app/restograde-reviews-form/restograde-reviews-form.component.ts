import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from '../models/review';
import { Restaurant } from '../models/restaurant';
import { UploadInput } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-restograde-reviews-form',
  templateUrl: './restograde-reviews-form.component.html',
  styleUrls: ['./restograde-reviews-form.component.scss']
})
export class RestogradeReviewsFormComponent implements OnInit {

  error: string = "";
  @Input() review: Review;
  @Input() restaurants: Restaurant[];

  restaurantsSelect: Array<any>;

  @Output() onSubmit = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.restaurantsSelect = this.restaurants.map(r => {
      return { value: r.id, label: r.name }
    });
  }

  onRangeValueChange(event: any) {
    const value = event.value;
    this.review.rating = value;
  }

  submit() {
    this.onSubmit.emit({ review: this.review });
  }

}
