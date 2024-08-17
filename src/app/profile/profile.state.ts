import {Profile} from "../models/profile.model";

export interface ProfileState {
  profiles: Profile[];
  profile: Profile | null;
  isLoading: boolean;
  error: any;
}
