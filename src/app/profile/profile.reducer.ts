import * as ProfileActions from './profile.action';
import {createReducer, on} from "@ngrx/store";
import {ProfileState} from "./profile.state";

const initialState: ProfileState = {
  profiles: [],
  profile: null,
  isLoading: false,
  error: '',
};


export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getAllProfiles, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    };
  }),
  on(ProfileActions.getAllProfilesSuccess, (state, { profiles }) => {
    return {
      ...state,
      profiles: profiles,
      isLoading: false,
      error: '',
    };
  }),
  on(ProfileActions.getAllProfilesFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error,
    };
  }),
);
