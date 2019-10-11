import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Mealplan } from 'src/app/classes/mealplan'
import { Meal } from 'src/app/classes/meal';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
@Injectable({
  providedIn: 'root'
})
export class MealplanService {

  constructor(private http:HttpClient) { }

  getMealPlans(user:User):Observable<Mealplan[]> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Mealplan[]>("http://localhost:8090/mealplan/byUser", JSON.stringify(user), {headers: headers});
  }

  submitMealPlan(userid:number, date:string):Observable<Mealplan> {
    let u = new User(userid, "mail@email.com","password","First Name", "Last Name", "address", "1996-12-17");
    let mp = new Mealplan(0, date, u);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    console.log("in submit mealplan")
    return this.http.post<Mealplan>("http://localhost:8090/mealplan/insert", JSON.stringify(mp), {headers: headers});
  }

}
