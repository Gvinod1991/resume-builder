import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../types';
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { AppThunk } from '../rootReducer';
import { Notify, toastTypes } from '../../utils/toast';

const getProviderInstance = (providerType: string) => {
  if (providerType === 'github') return new GithubAuthProvider();
  return new GoogleAuthProvider();
};

const provider = (providerType: string) => {
  if (providerType === 'github') return GithubAuthProvider;
  return GoogleAuthProvider;
};

export const LoginRequest =
  (providerType: string): AppThunk =>
    (dispatch) => {
      dispatch({
        type: LOGIN_REQUEST,
      });
      signInWithPopup(auth, getProviderInstance(providerType))
        .then((result) => {
          const credential = provider(providerType).credentialFromResult(result);
          const token = credential?.accessToken;
          if (token) {
            window.localStorage.setItem('firebaseToken', token);
          }
          const user = result.user;
          dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            Notify({
              title:
              'Account already exists with different credential,Try with other options!',
              type: toastTypes.ERROR,
            });
          } else {
            Notify({ title: errorMessage, type: toastTypes.ERROR });
          }
          dispatch({
            type: LOGIN_FAILED,
            payload: error,
          });
        });
    };
