import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({ setHeaders: { 'x-auth': window.localStorage.getItem('x-auth') } });
    return next.handle(newRequest);
    // return next.handle(request).pipe(tap(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (err: any) => {

    // }));
  }
}
