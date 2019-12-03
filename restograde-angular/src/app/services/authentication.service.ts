import { Injectable, AfterViewChecked } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  currentUser = null;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    // Check current state
    this.verifyLogin();
  }

  private verifyLogin() {
    console.log("Checking for existing session ...");

    return this.http.get<Object>(environment.endpoints.api + "oidc/verifyLogin", {withCredentials: true})
      .subscribe(data => { 
        if(data['status'] == 'authenticated') {
          console.log(`Resuming existing session (${data['username']})`)
          this.loggedIn.next(true);
          this.currentUser = {
            name: data['username']
          }
        }
        else {
          console.log(`No existing session found`)
          this.loggedIn.next(false);
        }
      });
  }
  
  isAuthenticated() : Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getLoginUrl() {
    return `${environment.endpoints.api}oidc/login`;
  }

  getLogoutUrl() {
    return `${environment.endpoints.api}oidc/logout`;
  }

}
