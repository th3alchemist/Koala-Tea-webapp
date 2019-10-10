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

  submitMealPlan(userid:number, date:string):Observable<Mealplan> {
    let u = new User(userid, "mail@email.com","password","First Name", "Last Name", "address", "1996-12-17");
    let mp = new Mealplan(4, date, u);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    console.log("in submit mealplan")
    return this.http.post<Mealplan>("http://localhost:8090/mealplan/insert", JSON.stringify(mp), {headers: headers});
  }

  submitMeal(mealplan:Mealplan, titlelist:string[], courselist:string[], timelist:string[]):Observable<Meal>{
    let list:Array<Meal> = [];
    for(var i=0; i<courselist.length; i++){
      let item = new Meal(0, titlelist[i], courselist[i], timelist[i] + ":00", mealplan);
      console.log(item)
      list.push(item);
    }
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    console.log("in submit meals")
    return this.http.post<Meal>("http://localhost:8090/meal/insert", JSON.stringify(list), {headers: headers});
  }
}
