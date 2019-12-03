import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { tap, mergeMap, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorizationHeader implements HttpInterceptor {

    constructor(private authService : AuthenticationService) {};

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url.startsWith(environment.endpoints.api)) {
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
        }
        else {
            console.log("Not attaching token to request (" + request.url + ")");
        }
    }
  }