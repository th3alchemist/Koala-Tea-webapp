import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  submitLoginForm(email:string, password:string) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    // let user = new User(email, password);

    let body = new HttpParams().set("email", email).set("password", password);

    return this.http.post("http://localost:8090/user/login", body, {headers: headers});
  }

}
