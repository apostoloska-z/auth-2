import { Action, props } from '@ngrx/store';
import { createAction } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
}



export const LogIn = createAction(
  AuthActionTypes.LOGIN,
  props<{payload?: any}>()
)

export const LogInSuccess = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{token?: any, email?: string}>()
)

export const LogInFailure = createAction(
    AuthActionTypes.LOGIN_FAILURE,
    props<{errorMessage?: any}>()
)

export const LogOut = createAction(
    AuthActionTypes.LOGOUT,
)

