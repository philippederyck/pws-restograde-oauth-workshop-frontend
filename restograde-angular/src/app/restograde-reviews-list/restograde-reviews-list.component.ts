import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../models/review';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-restograde-reviews-list',
  templateUrl: './restograde-reviews-list.component.html',
  styleUrls: ['./restograde-reviews-list.component.scss']
})
export class RestogradeReviewsListComponent implements OnInit {

  @Input() reviews: Review[];
  @Input() editable: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  getImageUrl(id : number) : string {
    return environment.endpoints.api + "/images/" + id;
  }

}
