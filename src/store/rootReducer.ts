import { combineReducers } from 'redux';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthReducer, ResumeReducer } from './reducer';

export const RootReducer = combineReducers({
  auth: AuthReducer,
  resume: ResumeReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type RootState = ReturnType<typeof RootReducer>;
