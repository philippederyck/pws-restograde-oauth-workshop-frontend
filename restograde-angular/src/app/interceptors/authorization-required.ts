import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthorizationRequired implements HttpInterceptor {

    constructor(private router: Router, private injector: Injector) {};

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {}, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.injector.get(AuthenticationService).logout();

                        // Redirect to login route
                        this.router.navigate(["/login"]);
                    }
                }
            })
        );
    }
  }