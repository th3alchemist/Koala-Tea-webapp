import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  submitLoginForm(email:string, password:string):Observable<User> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post("http://localhost:8090/user/login2", JSON.stringify({"email": email, "password": password}), {headers: headers}) as Observable<User>;
  }

  currentUserId:number;
  currentUserName:string;

}
