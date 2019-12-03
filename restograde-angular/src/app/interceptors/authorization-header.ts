import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthorizationHeader implements HttpInterceptor {

    constructor() {};

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.getToken();
        if(token) {
            console.log("Attaching authentication token to request (" + request.url + "): " + token);
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if(event.headers.has("Authorization")) {
                    console.log("Authorization header found in response.")
                    let header = event.headers.get("Authorization");
                    if(header.startsWith("Bearer ")) {
                        let token = header.substring(7);
                        console.log(`Storing authentication token: ${token}`);
                        this.storeToken(token);
                    }
                    else {
                        console.log("Authorization header is not what we expected. Not using its value.")
                    }
                }
                }
            }, (err: any) => {})
        );
    }

    storeToken(token: string) {
        localStorage.setItem("token", token);
    }

    getToken() : string {
        return localStorage.getItem("token");
    }
  }