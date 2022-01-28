import { AnyAction } from 'redux';
import {
  GET_RESUME_DATA_FAILED,
  GET_RESUME_DATA_SUCCESS,
  GET_RESUME_DATA_REQUEST,
} from '../types';

export interface IResumeState {
  resumeLoading: Boolean;
  resumeDetails: {
    location?: string;
    jobRole?: string;
  };
}

const initialState: IResumeState = {
  resumeLoading: false,
  resumeDetails: {},
};

export const ResumeReducer = (
  state = initialState,
  action: AnyAction
): IResumeState => {
  switch (action.type) {
  case GET_RESUME_DATA_REQUEST: {
    return {
      ...state,
      resumeLoading: true,
    };
  }
  case GET_RESUME_DATA_SUCCESS: {
    return {
      ...state,
      resumeLoading: false,
      resumeDetails: action.payload,
    };
  }
  case GET_RESUME_DATA_FAILED: {
    return {
      ...state,
      resumeLoading: false,
    };
  }
  default:
    return {
      ...state,
    };
  }
};
