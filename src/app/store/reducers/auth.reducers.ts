import { User } from '../../models/user.model';
import { AuthActionTypes } from '../actions/auth.actions';



export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
  token: any;
  email: string;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    token: undefined,
    email: ''
};

  export function reducer(state = initialState, action: any): State {
    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          token: action.token,
          email: action.email,
          errorMessage: null
        };
      }
      case AuthActionTypes.LOGIN_FAILURE: {
        return {
          ...state,
          errorMessage: 'Incorrect email and/or password.'
        };
      }
      case AuthActionTypes.LOGOUT: {
        return initialState;
      }
      default: {
        return state;
      }
    }
  }
