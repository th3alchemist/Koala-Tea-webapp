import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Mealplan } from 'src/app/classes/mealplan'
import { Meal } from 'src/app/classes/meal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http:HttpClient) { }

  getMeals(mealplan:Mealplan):Observable<Meal[]>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Meal[]>("http://localhost:8090/meal/byMealPlan", JSON.stringify(mealplan), {headers: headers});
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
