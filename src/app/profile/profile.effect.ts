import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ProfileActions from "./profile.action";
import {catchError, map, mergeMap, of} from "rxjs";
import {ProfileService} from "../services/profile.service";

@Injectable()
export class ProfileEffect {
  constructor(private action$: Actions,
              private profileService: ProfileService) {
  }

  getAllProfiles$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ProfileActions.getAllProfiles),
      mergeMap(() => {
        return this.profileService.getAllProfiles().pipe(
          map(profiles => ProfileActions.getAllProfilesSuccess({profiles: profiles})),
          catchError(error => of(ProfileActions.getAllProfilesFailed({error: error})))
        )
      })
    )
  })


}
