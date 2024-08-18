import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = "http://localhost:3000/profile";
  constructor(private http: HttpClient) {}

  getAllProfiles() {
    return this.http.get<Profile[]>(`${this.url}/all`);
  }

  deleteProfile(id: string){
    return this.http.delete(`${this.url}/${id}`);
  }
}
