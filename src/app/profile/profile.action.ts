import {createAction, props} from "@ngrx/store";
import {Profile} from "../models/profile.model";

export const getAllProfiles = createAction(
  '[Profile] Get All Profiles');

export const getAllProfilesSuccess = createAction(
  '[Profile] Get All Profiles Success',
  props<{ profiles: Profile[] }>());

export const getAllProfilesFailed = createAction(
  '[Profile] Get All Profiles Failure',
  props<{ error: string }>());
