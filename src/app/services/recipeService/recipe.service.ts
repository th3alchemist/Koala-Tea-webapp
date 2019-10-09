import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/classes/ingredient';
import { Recipe } from 'src/app/classes/recipe';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { Cookbook } from 'src/app/classes/cookbook';
import { Unit } from 'src/app/classes/unit';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }


  submitRecipe(cookbookid:number, title:string, shared:boolean, instructions:string):Observable<Recipe> {
    let u = new User(1, "mail@email.com","password","First Name", "Last Name", "address", "1996-12-17");
    let c = new Cookbook(1, "My Cookbook", "Description", true, u);
    let r = new Recipe(6, title, instructions, true, u, c);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    console.log("in submit recipe")
    return this.http.post<Recipe>("http://localhost:8090/recipe/insert", JSON.stringify(r), {headers: headers});
  }

  submitIngredient(recipe:Recipe, ingredientlist:string[], amountlist:number[], unitlist:number[]):Observable<Ingredient>{
    let list:Array<Ingredient> = [];
    for(var i=0; i<ingredientlist.length; i++){
      let unit = new Unit(unitlist[i], "");
      let item = new Ingredient(25 + i, ingredientlist[i], amountlist[i], recipe, unit);
      console.log(ingredientlist[i])
      console.log(amountlist[i])
      console.log(unitlist[i])
      list.push(item);
    }
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    console.log("in submit ingredient")
    return this.http.post<Ingredient>("http://localhost:8090/ingredient/insert", JSON.stringify(list), {headers: headers});
  }
}
