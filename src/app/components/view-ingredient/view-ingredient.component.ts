import { Component, OnInit } from '@angular/core';
import { Cookbook } from 'src/app/classes/cookbook';
import { SpoonService } from 'src/app/services/spoon/spoon.service'
import { MealplanService } from 'src/app/services/mealplanService/mealplan.service';
import { MealService } from 'src/app/services/mealService/meal.service';
import { IngredientService } from 'src/app/services/ingredientService/ingredient.service';
import { RecipeService } from 'src/app/services/recipeService/recipe.service';
import { User } from 'src/app/classes/user';
import { CookbookService } from 'src/app/service/cookbook.service';
import { Cookbook } from 'src/app/classes/cookbook';
import { Recipe } from 'src/app/classes/recipe';
import { Mealplan } from 'src/app/classes/mealplan';
import { Meal } from 'src/app/classes/meal';
import { Ingredient } from 'src/app/classes/ingredient';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transferService/transfer.service';

@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.css']
})
export class ViewIngredientComponent implements OnInit {

  constructor(private cbs:CookbookService,private mps:MealplanService, 
    private ms:MealService, private is:IngredientService, 
    private rs:RecipeService, private router:Router,
    private transferService:TransferService) { }

  ngOnInit() {
  }

  data:any

  onSearch(){
    var query_ele = document.getElementById("query");
    var query = (<HTMLInputElement> query_ele).value
//HTMLSelectElement
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
        console.log(this.data.title);

        var title_ele = <HTMLInputElement>document.getElementById('title')

        title_ele.value = this.data.title
      })
  }
}

