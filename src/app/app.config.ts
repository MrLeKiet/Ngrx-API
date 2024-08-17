import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {profileReducer} from "./profile/profile.reducer";
import {ProfileEffect} from "./profile/profile.effect";


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore({
      "profile": profileReducer
    }),
    provideEffects( ProfileEffect),
    provideHttpClient(), provideAnimationsAsync()]
};
