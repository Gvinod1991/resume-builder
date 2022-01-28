import { AnyAction } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../types';

interface IAuthState {
  isLoggedIn: Boolean;
  isLoading: Boolean;
  userDetails: Object;
}

const initialState: IAuthState = {
  isLoggedIn: true,
  isLoading: false,
  userDetails: {},
};

export const AuthReducer = (
  state = initialState,
  action: AnyAction
): IAuthState => {
  switch (action.type) {
  case LOGIN_REQUEST: {
    return {
      ...state,
      isLoading: true,
    };
  }
  case LOGIN_SUCCESS: {
    return {
      ...state,
      isLoggedIn: true,
      userDetails: action.payload,
      isLoading: false,
    };
  }
  case LOGIN_FAILED: {
    return {
      ...state,
      isLoggedIn: false,
      isLoading: false,
    };
  }
  default:
    return {
      ...state,
    };
  }
};
