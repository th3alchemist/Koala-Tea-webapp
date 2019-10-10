import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookbook } from '../../classes/cookbook';
import { User } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class CookbookService {

  constructor(private http:HttpClient) {

  }

  save(cb:Cookbook){
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    let body = cb;

    return this.http.post("http://localhost:8090/cookbook/save", body, {headers: headers});
  }

  getById(id:number){
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    let url = "http://localhost:8090/cookbook/" + id

    return this.http.get(url, {headers: headers})
  }
}