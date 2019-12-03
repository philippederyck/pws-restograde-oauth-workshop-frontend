import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { Restaurant } from '../models/restaurant';
import { environment } from '../../environments/environment';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {

  constructor(private http: HttpClient) { }

  getReview(id : number) : Observable<Review> {
    console.log(`Fecthing a review (id: ${id} )`);
    return this.http.get<Review>(environment.endpoints.api + "reviews/" + id)
        .pipe(catchError(this.handleError<any>("getReview")));
  }

  getReviewsByRestaurantId(id : number) : Observable<Review[]> {
    console.log(`Fecthing a list of reviews for a restaurant (id: ${id} )`);
    return this.http.get<Review[]>(environment.endpoints.api + "reviews?restaurant=" + id)
        .pipe(catchError(this.handleError<any>("listReviewsByRestaurantId")));
  }

  getReviewsForUser() : Observable<Review[]> {
    console.log(`Fecthing a list of reviews for the current user`);
    return this.http.get<Review[]>(environment.endpoints.api + "reviews")
        .pipe(catchError(this.handleError<any>("listReviewsByAuthorId")));
  }

  createReview(data) {
    let uploadData = this.formatReviewData(data);
    return this.http.post<Review>(environment.endpoints.api + "reviews/", uploadData);
  }

  updateReview(data) {
    let uploadData = this.formatReviewData(data);
    return this.http.patch<Review>(environment.endpoints.api + "reviews/" + data.review.id, uploadData);
  }

  private formatReviewData(data) {
    let result = new FormData();

    let review = data.review;
    let image = data.image;

    result.append("restaurant", review.restaurantId);
    result.append("rating", review.rating);
    if(review.title) result.append("title", review.title);
    if(review.content) result.append("content", review.content);
    if(image) result.append("image", image.nativeFile, image.name);

    return result;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      console.error(error);
      return of(result as T);
    };
  }
}
