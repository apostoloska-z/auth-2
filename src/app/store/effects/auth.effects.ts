import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { catchError, exhaustMap, map, switchMap, tap, concatMap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import {
    AuthActionTypes,
    LogIn, LogInSuccess, LogInFailure,
  } from '../actions/auth.actions';


@Injectable()
export class LoginEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN),
      switchMap((action: any) => {
          console.log(action);
          const result= action.payload;
          return this.authService.logIn(result.email, result.password).pipe(
            map(user => {
                return LogInSuccess({ token: user.token, email: result.email })
            }),
            catchError(error => of(LogInFailure({ errorMessage:error })))
          )
          }
    )
    ))

}

