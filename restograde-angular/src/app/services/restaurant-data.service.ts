import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { Restaurant } from '../models/restaurant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {

  constructor(private http: HttpClient) { }

  listRestaurants() : Observable<Restaurant[]> {
    console.log("Fecthing a list of restaurants");
    return this.http.get<Restaurant[]>(environment.endpoints.api + "bff/restaurants", {withCredentials: true})
       .pipe(catchError(this.handleError<any>("listRestaurants")));
  }

  // getRestaurant(id : number) : Observable<Restaurant> {
  //   console.log("Fecthing a restaurant: " + id);
  //   return this.http.get<Restaurant>(environment.endpoints.api + "restaurants/" + id)
  //      .pipe(catchError(this.handleError<any>("getRestaurant")));
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      console.error(error);
      return of(result as T);
    };
  }
}
