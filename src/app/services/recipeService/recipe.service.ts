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

  getRecipes(cookbook:Cookbook):Observable<Recipe[]>{
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.post<Recipe[]>("http://localhost:8090/recipe/byCookbook", JSON.stringify(cookbook), {headers: headers});
  }

  submitRecipe(cookbookid:number, title:string, shared:boolean, instructions:string):Observable<Recipe> {
    let u = new User(1, "mail@email.com","password","First Name", "Last Name", "address", "1996-12-17");
    let c = new Cookbook(1, "My Cookbook", "Description", true, u);
    let r = new Recipe(6, title, instructions, true, u, c);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Recipe>("http://localhost:8090/recipe/insert", JSON.stringify(r), {headers: headers});
  }

}
