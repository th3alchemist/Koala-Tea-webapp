import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookbook } from '../classes/cookbook';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class CookbookService {

  constructor(private http:HttpClient) {


    save(cb:Cookbook){
      let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");

      let body = cb;

      return http.post("http://localhost:8090/cookbook/save", body, {headers: headers});
    }
  }
}
