import {
  GET_RESUME_DATA_REQUEST,
  GET_RESUME_DATA_SUCCESS,
  GET_RESUME_DATA_FAILED,
} from '../types';
import { collection, doc, getDoc } from 'firebase/firestore';
import { AppThunk } from '../rootReducer';
import { db } from '../../utils/firebase';
import { Notify, toastTypes } from '../../utils/toast';

export const getResumeData = (): AppThunk => async (dispatch) => {
  dispatch({
    type: GET_RESUME_DATA_REQUEST,
  });
  try {
    const resumeRef = collection(db, 'resume');
    const resumeDocRef = doc(resumeRef, 'YorB70a3zUcPui8au4SX');
    const resumeSnap = await getDoc(resumeDocRef);
    Notify({ title: 'Success', type: toastTypes.SUCCESS });
    dispatch({
      type: GET_RESUME_DATA_SUCCESS,
      payload: resumeSnap.data(),
    });
  } catch (e) {
    dispatch({
      type: GET_RESUME_DATA_FAILED,
    });
  }
};
