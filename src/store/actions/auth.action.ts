import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../types';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { AppThunk } from '../rootReducer';

const provider = new GoogleAuthProvider();
export const LoginRequest = (): AppThunk => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  })
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      if (token) {
        window.localStorage.setItem('firebaseToken', token);
      }
      const user = result.user;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      })
    }).catch((error) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: error
      })
    });
}