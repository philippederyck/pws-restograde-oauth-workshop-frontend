import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorizationHeader implements HttpInterceptor {

    constructor() {};

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url.startsWith(environment.endpoints.api)) {
            let token = this.getToken();
            if(token) {
                console.log("Attaching authentication token to request (" + request.url + "): " + token);
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        }
        else {
            console.log("Not attaching token to request (" + request.url + ")");
        }
        return next.handle(request);
    }
    
    getToken() : string {
        return localStorage.getItem("token");
    }
  }