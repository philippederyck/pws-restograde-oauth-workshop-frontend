import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { tap, mergeMap, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
=======
import { tap } from 'rxjs/operators';
>>>>>>> master
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorizationHeader implements HttpInterceptor {

    constructor(private authService : AuthenticationService) {};

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url.startsWith(environment.endpoints.api)) {
<<<<<<< HEAD
            return this.authService.getTokenSilently$().pipe(
                mergeMap(token => {
                    console.log("Attaching authentication token to request (" + request.url + "): " + token);
                    const tokenReq = request.clone({
                        setHeaders: { Authorization: `Bearer ${token}` }
                    });
                    return next.handle(tokenReq);
                }),
                catchError(err => throwError(err))
            );        
=======
            let token = this.getToken();
            if(token) {
                console.log("Attaching authentication token to request (" + request.url + "): " + token);
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
>>>>>>> master
        }
        else {
            console.log("Not attaching token to request (" + request.url + ")");
        }
<<<<<<< HEAD
=======
        return next.handle(request);
    }
    
    getToken() : string {
        return localStorage.getItem("token");
>>>>>>> master
    }
  }