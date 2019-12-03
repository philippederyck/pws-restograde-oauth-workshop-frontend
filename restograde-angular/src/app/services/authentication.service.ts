import { Injectable, AfterViewChecked } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  changed = false;
  currentUser = null;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    // Reload state from localStorage
    let token = localStorage.getItem("token");
    if(token != null) {
      this.loggedIn.next(true);
      this.currentUser = { name: localStorage.getItem("name") }
    }
  }

  login(user: string, pass: string) : Observable<string> {
    console.log("Logging in: " + user);

    return this.http.post<string>(environment.endpoints.api + "login", { email: user, password: pass })
      .pipe(
        tap(data => { 
          console.log("Authentication successful, storing token in localStorage");
          
          localStorage.setItem("token", data['token']);
          localStorage.setItem("name", data['name']);

          this.loggedIn.next(true);
          this.currentUser = {
            name: data['name']
          }
        })
      );
  }
  
  isAuthenticated() : Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout() {
    console.log("Logging out ...");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    this.currentUser == null;
    this.loggedIn.next(false);
  }

}
