import { combineReducers } from "redux";
import { AnyAction } from "redux"
import { ThunkAction } from 'redux-thunk';
import { AuthReducer } from "./reducer";

export const RootReducer = combineReducers({
  auth: AuthReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

export type RootState = ReturnType<typeof RootReducer>;