
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { RestogradeHomeComponent } from './restograde-home/restograde-home.component';
import { RestogradeRestaurantsComponent } from './restograde-restaurants/restograde-restaurants.component';

import { RestaurantDataService } from './services/restaurant-data.service';
import { RestaurantReviewsResolve } from './resolvers/restaurant-reviews-resolve';
import { RestogradeRestaurantsReviewsComponent } from './restograde-restaurants-reviews/restograde-restaurants-reviews.component';
import { ReviewDataService } from './services/review-data.service';
import { RestogradeLoginComponent } from './restograde-login/restograde-login.component';
import { RestogradeLogoutComponent } from './restograde-logout/restograde-logout.component';
import { RestogradeLoginFormComponent } from './restograde-login-form/restograde-login-form.component';
import { AuthenticationService } from './services/authentication.service';
import { RestogradeUsersReviewsComponent } from './restograde-users-reviews/restograde-users-reviews.component';
import { UserReviewsResolve } from './resolvers/user-reviews-resolve';
import { RestogradeReviewsListComponent } from './restograde-reviews-list/restograde-reviews-list.component';
import { RestogradeReviewsFormComponent } from './restograde-reviews-form/restograde-reviews-form.component';
import { RestogradeReviewsNewComponent } from './restograde-reviews-new/restograde-reviews-new.component';
import { RestaurantsResolve } from './resolvers/restaurants-resolve';
import { RestogradeReviewsEditComponent } from './restograde-reviews-edit/restograde-reviews-edit.component';
import { ReviewResolve } from './resolvers/review-resolve';
import { AuthorizationRequired } from './interceptors/authorization-required';
import { AuthorizationHeader } from './interceptors/authorization-header';



@NgModule({
  declarations: [
    AppComponent,
    RestogradeHomeComponent,
    RestogradeRestaurantsComponent,
    RestogradeRestaurantsReviewsComponent,
    RestogradeLoginComponent,
    RestogradeLogoutComponent,
    RestogradeLoginFormComponent,
    RestogradeUsersReviewsComponent,
    RestogradeReviewsListComponent,
    RestogradeReviewsFormComponent,
    RestogradeReviewsNewComponent,
    RestogradeReviewsEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationRequired, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationHeader, multi: true },
    MDBSpinningPreloader,
    AuthenticationService,
    RestaurantDataService,
    ReviewDataService,
    RestaurantReviewsResolve,
    UserReviewsResolve,
    RestaurantsResolve,
    ReviewResolve
  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
