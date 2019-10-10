import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/classes/ingredient';
import { Recipe } from 'src/app/classes/recipe';
import { Unit } from 'src/app/classes/unit';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http:HttpClient) { }

  getIngredient(recipe:Recipe):Observable<Ingredient[]>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Ingredient[]>("http://localhost:8090/ingredient/byRecipe", JSON.stringify(recipe), {headers: headers});
  }

  submitIngredient(recipe:Recipe, ingredientlist:string[], amountlist:number[], unitlist:number[]):Observable<Ingredient>{
    let list:Array<Ingredient> = [];
    for(var i=0; i<ingredientlist.length; i++){
      let unit = new Unit(unitlist[i], "");
      let item = new Ingredient(0, ingredientlist[i], amountlist[i], recipe, unit);
      list.push(item);
    }
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Ingredient>("http://localhost:8090/ingredient/insert", JSON.stringify(list), {headers: headers});
  }
}
