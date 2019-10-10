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

    let headers = new HttpHeaders().set("Content-Type", "application/json")
    let url = "http://localhost:8090/spoon/recipe"

    return this.http.post(url, body, {headers: headers});
  }
}

//"https://api.spoonacular.com/recipes/search?limit=1&apiKey=289b04699cb04232ba94fb1380791a59&course=appetizer&cuisine=British&diet=Gluten%20Free&intolerances=Egg&number=1"
