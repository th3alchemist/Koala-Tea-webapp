import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpoonService {

  constructor(private http:HttpClient) { }

  course:string
  diet:string
  intolerances:string

  searchRecipe(query:string, course:string, cuisine:string,
               diet:string, intolerances:string){

     let body = new HttpParams().set("query", query)
                                .set("course", course)
                                .set("cuisine", cuisine)
                                .set("diet", diet)
                                .set("intolerances", intolerances)
                                .set("number", "1")
                                .set("instructionsRequired", "True")

    let headers = new HttpHeaders().set("Content-Type", "application/json")
    let url = "http://localhost:8090/spoon/recipe"

    return this.http.post(url, body, {headers: headers});
  }

  recipeDetails(id:string){
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    let url = "http://localhost:8090/spoon/recipe/" + id
    return this.http.get(url, {headers: headers});
  }
}