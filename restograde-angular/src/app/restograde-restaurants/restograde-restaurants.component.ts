import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantDataService } from '../services/restaurant-data.service';

@Component({
  selector: 'app-restograde-restaurants',
  templateUrl: './restograde-restaurants.component.html',
  styleUrls: ['./restograde-restaurants.component.scss']
})
export class RestogradeRestaurantsComponent implements OnInit {

  query : string = "";
  restaurants : Restaurant[];
  displayedRestaurants : Restaurant[];

  constructor(private restaurantData: RestaurantDataService) { }

  ngOnInit() {
    this.restaurants = [];
    this.displayedRestaurants = [];

    this.restaurantData.listRestaurants().subscribe(restaurants => {
      if(restaurants) {
        this.restaurants = restaurants;
        this.displayedRestaurants = restaurants;
      }
    });
  }

  searchRestaurants(query : string) {
    console.log("Searching the list of restaurants with key: " + query);
    let lcQuery = query.toLowerCase();
    this.displayedRestaurants = this.restaurants.filter(restaurant => {
      return (restaurant.name.toLowerCase().indexOf(lcQuery) != -1);
    });
    this.query = query;
  }

}
