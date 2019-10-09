import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http:HttpClient) { }

  submitCreateAccount(fname:string, lname:string, dateOfBirth:string, address:string, email:string, password:string):Observable<User> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let user = new User(0, email, password, fname, lname, address, dateOfBirth);

    // let body = new HttpParams().set("user", user);

    return this.http.post("http://localhost:8090/user/insert", JSON.stringify(user), {headers: headers}) as Observable<User>;

  }
}
