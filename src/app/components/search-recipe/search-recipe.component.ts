import { Component, OnInit } from '@angular/core';
import { Cookbook } from 'src/app/classes/cookbook';
import { Recipe } from 'src/app/classes/recipe';
import { SpoonService } from 'src/app/services/spoon/spoon.service'
import { LoginService } from 'src/app/services/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {

  constructor(private ss:SpoonService, private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.currentUserId = this.loginService.currentUserId

    if(this.currentUserId === undefined || this.currentUserId < 0) {
      this.router.navigate([""]);
    } 
  }

  currentUserId:number;
  data:any
  id:number

  onSearch(){
    var query_ele = document.getElementById("query");
    var query = (<HTMLInputElement> query_ele).value

    var cuisine_ele = <HTMLSelectElement>document.getElementById("cuisine");
    var cuisine = cuisine_ele.options[cuisine_ele.selectedIndex].value

    var course_ele = <HTMLSelectElement>document.getElementById("course");
    var course = course_ele.options[course_ele.selectedIndex].value

    var diet_ele = <HTMLSelectElement>document.getElementById("diet");
    var diet = diet_ele.options[diet_ele.selectedIndex].value

    var intolerances_ele = <HTMLSelectElement>document.getElementById("intolerances");
    var intolerance = intolerances_ele.options[intolerances_ele.selectedIndex].value

    this.ss.searchRecipe(query, course, cuisine, diet, intolerance).subscribe(
      data => {
        this.data = data
        this.id = this.data.id

        var title_ele = <HTMLInputElement>document.getElementById('recipeTitle')

        title_ele.value = this.data.title
      })
  }
}
