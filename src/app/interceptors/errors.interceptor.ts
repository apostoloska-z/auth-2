import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          console.log('Unauthorized');
        }

        if (err.status === 403) {
          console.log('Forbidden');
        }

        if (err.status === 500) {
            console.log('Unexpected server error');
        }

        if (err.status === 404) {
            console.log('Page not found');
        }
        if (err.status === 400) {
            console.log('Bad request');
        }
        const error = err.error.message || err.statusText;
        return throwError(() => new Error(error));
      }),
    );
  }

}
