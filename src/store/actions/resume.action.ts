import {
  GET_RESUME_DATA_REQUEST,
  GET_RESUME_DATA_SUCCESS,
  GET_RESUME_DATA_FAILED,
  SAVE_RESUME_DATA_FAILED,
  SAVE_RESUME_DATA_REQUEST,
  SAVE_RESUME_DATA_SUCCESS,
  UPDATE_RESUME_DATA_FAILED,
  UPDATE_RESUME_DATA_REQUEST,
  UPDATE_RESUME_DATA_SUCCESS,
} from '../types';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  where,
  query,
  updateDoc,
} from 'firebase/firestore';
import { AppThunk } from '../rootReducer';
import { db } from '../../utils/firebase';
import { IResumeDetails } from '../reducer/resume.reducer';

import { Notify, toastTypes } from '../../utils/toast';

export const getResumeData =
  (uId: string): AppThunk =>
    async (dispatch) => {
      dispatch({
        type: GET_RESUME_DATA_REQUEST,
      });
      try {
        const q = query(collection(db, 'resume'), where('userId', '==', uId));
        const querySnapshot = await getDocs(q);
        let resumeData = {};
        querySnapshot.forEach((queryData) => {
          resumeData = queryData.data();
        });
        dispatch({
          type: GET_RESUME_DATA_SUCCESS,
          payload: resumeData,
        });
      } catch (e) {
        dispatch({
          type: GET_RESUME_DATA_FAILED,
        });
      }
    };

export const addNewResumeData =
  (resumeData: IResumeDetails, uId: string): AppThunk =>
    async (dispatch) => {
      const resumeDataToSave = {
        ...resumeData,
        userId: uId,
      };
      dispatch({
        type: SAVE_RESUME_DATA_REQUEST,
      });
      try {
        const q = query(collection(db, 'resume'), where('userId', '==', uId));
        const querySnapshot = await getDocs(q);
        let resumeDataExists = false;
        querySnapshot.forEach((queryData) => {
          if (queryData.id) {
            resumeDataExists = true;
          }
        });
        if (!resumeDataExists) {
          const docRef = await addDoc(collection(db, 'resume'), resumeDataToSave);
          dispatch({
            type: SAVE_RESUME_DATA_SUCCESS,
            payload: docRef.id,
          });
          dispatch(getResumeData(uId));
        } else {
          dispatch({
            type: SAVE_RESUME_DATA_FAILED,
          });
        }
      } catch (e) {
        dispatch({
          type: SAVE_RESUME_DATA_FAILED,
        });
      }
    };

export const updateResumeData =
  (resumeData: IResumeDetails, uId: any): AppThunk =>
    async (dispatch) => {
      const resumeDataToSave = {
        ...resumeData,
      };
      dispatch({
        type: UPDATE_RESUME_DATA_REQUEST,
      });
      try {
        const q = query(collection(db, 'resume'), where('userId', '==', uId));
        const querySnapshot = await getDocs(q);
        let docId;
        querySnapshot.forEach((queryData) => {
          if (queryData.id) {
            docId = queryData.id;
          }
        });

        if (docId) {
          const docRef = doc(db, 'resume', docId);
          await updateDoc(docRef, resumeDataToSave);
          Notify({
            title: 'Resume data update successful!',
            type: toastTypes.SUCCESS,
          });
          dispatch(getResumeData(uId));
          dispatch({
            type: UPDATE_RESUME_DATA_SUCCESS,
          });
        } else {
          dispatch({
            type: UPDATE_RESUME_DATA_FAILED,
          });
        }
      } catch (e) {
        dispatch({
          type: UPDATE_RESUME_DATA_FAILED,
        });
      }
    };
