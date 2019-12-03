import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestogradeHomeComponent } from './restograde-home/restograde-home.component';
import { RestogradeRestaurantsComponent } from './restograde-restaurants/restograde-restaurants.component';
import { RestogradeRestaurantsReviewsComponent } from './restograde-restaurants-reviews/restograde-restaurants-reviews.component';
import { RestaurantReviewsResolve } from './resolvers/restaurant-reviews-resolve';
import { UserReviewsResolve } from './resolvers/user-reviews-resolve';
import { RestogradeUsersReviewsComponent } from './restograde-users-reviews/restograde-users-reviews.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { RestogradeReviewsNewComponent } from './restograde-reviews-new/restograde-reviews-new.component';
import { RestaurantsResolve } from './resolvers/restaurants-resolve';
import { RestogradeReviewsEditComponent } from './restograde-reviews-edit/restograde-reviews-edit.component';
import { ReviewResolve } from './resolvers/review-resolve';

const routes: Routes = [
    { path: 'home', component: RestogradeHomeComponent },
    { path: 'restaurants', component: RestogradeRestaurantsComponent },
    { 
      path: 'restaurants/:id/reviews', 
      component: RestogradeRestaurantsReviewsComponent, 
      resolve: {
        reviews: RestaurantReviewsResolve
      }
    },
    { 
      path: 'myreviews', 
      component: RestogradeUsersReviewsComponent,
      resolve: {
        reviews: UserReviewsResolve
      },
      canActivate: [AuthenticationGuardService]
    },
    { 
      path: 'writereview', 
      component: RestogradeReviewsNewComponent,
      resolve: {
        restaurants: RestaurantsResolve
      },
      canActivate: [AuthenticationGuardService]
    },
    { 
      path: 'reviews/:id/edit', 
      component: RestogradeReviewsEditComponent,
      resolve: {
        review: ReviewResolve,
        restaurants: RestaurantsResolve
      },
      canActivate: [AuthenticationGuardService]
    },
    { path: '**', redirectTo: '/home' },
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
  