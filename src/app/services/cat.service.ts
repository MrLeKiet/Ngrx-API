import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catURL = "https://api.thecatapi.com/v1/images/search?limit="

  constructor(private http: HttpClient) {
  }

  // getCats(limit: number) : Observable<CatModel[]> {
  //   return this.http.get<CatModel[]>(`${this.catURL}${limit}`)
  // }
}
