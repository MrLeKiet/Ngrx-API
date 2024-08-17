import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {ProfileCardComponent} from "../../componenets/profile-card/profile-card.component";
import {ProfileState} from "../../profile/profile.state";
import * as ProfileActions from "../../profile/profile.action";

@Component({
  selector: 'app-list-profiles',
  standalone: true,
  imports: [
    AsyncPipe,
    ProfileCardComponent
  ],
  templateUrl: './list-profiles.component.html',
  styleUrl: './list-profiles.component.scss'
})
export class ListProfilesComponent {
  profile$!:Observable<ProfileState>
  constructor(private store : Store<{profile: ProfileState}>) {
    this.profile$ = this.store.select('profile');
    this.store.dispatch(ProfileActions.getAllProfiles());
  }
}
