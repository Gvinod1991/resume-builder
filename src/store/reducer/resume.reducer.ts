import { AnyAction } from 'redux';
import {
  GET_RESUME_DATA_FAILED,
  GET_RESUME_DATA_SUCCESS,
  GET_RESUME_DATA_REQUEST,
  UPDATE_RESUME_DATA_FAILED,
  UPDATE_RESUME_DATA_REQUEST,
  UPDATE_RESUME_DATA_SUCCESS,
} from '../types';

export type ProfileType = {
  network: string;
  url: string;
};

type SkillType = {
  skillName?: string;
  level?: number;
};
type WorkType = {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
};
type EducationType = {
  institution: string;
  studyType: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
};
type ProjectType = {
  title: string;
  role: string;
  description: string;
  techStack: Array<string>;
};
export interface IResumeDetails {
  userId?: string;
  candidateName?: string;
  location?: string;
  jobRole?: string;
  profileImage?: string;
  email?: string;
  phone?: string;
  resumeHighlights?: string;
  totalExperience?: string;
  achievements?: string;
  profiles?: Array<ProfileType>;
  skills?: {
    genericSkills: Array<string>;
    languages: Array<SkillType>;
    frameworks: Array<SkillType>;
    libraries: Array<SkillType>;
    databases: Array<SkillType>;
    tools: Array<SkillType>;
  };
  work?: Array<WorkType>;
  projects?: Array<ProjectType>;
  education?: Array<EducationType>;
}

export interface IResumeState {
  resumeLoading: Boolean;
  resumeDetails: IResumeDetails;
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
  case UPDATE_RESUME_DATA_REQUEST: {
    return {
      ...state,
      resumeLoading: true,
    };
  }
  case UPDATE_RESUME_DATA_SUCCESS: {
    return {
      ...state,
      resumeLoading: false,
    };
  }
  case UPDATE_RESUME_DATA_FAILED: {
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
