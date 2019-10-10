import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Cookbook } from 'src/app/classes/cookbook';
import { SpoonService } from 'src/app/services/spoon/spoon.service'
=======
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
>>>>>>> d1dc41598ff20afaf53b3ad377899649e580a6ba

@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.css']
})
export class ViewIngredientComponent implements OnInit {

<<<<<<< HEAD
  constructor(private ss:SpoonService) { }
=======
  constructor(private cbs:CookbookService,private mps:MealplanService, 
    private ms:MealService, private is:IngredientService, 
    private rs:RecipeService, private router:Router,
    private transferService:TransferService) { }
>>>>>>> d1dc41598ff20afaf53b3ad377899649e580a6ba

  ngOnInit() {
  }

<<<<<<< HEAD
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
=======
  id:number;
  name:string;
  amount:number;
  recipe:string;
  unit:string;

  dataCookbook:any; 
  dataRecipe:any;
  dataIngredient:any;
  dataMealplan:any;
  dataMeal:any;

  user:User = new User(1, "aa", "bb", "cc", "dd", "ee", "2019-09-09");
  cb:Cookbook[] = [];
  r:Recipe[] = [];
  mp:Mealplan[] = [];
  m:Meal[] = [];
  i:Ingredient[] = [];
  test(){
    //GET COOKBOOKS
    this.cbs.getCookbooks(this.user).subscribe(
      data => {
        this.dataCookbook = data;
        console.log(this.dataCookbook);
          this.transferService.setData(this.dataCookbook);

          this.router.navigate(['/viewRecipes']);
        //GET RECIPE BY COOKBOOK
        // this.rs.getRecipes(this.dataCookbook[0]).subscribe(
        //   data => {
        //     this.dataRecipe = data;
        //     console.log(this.dataRecipe);
        //     //GET INGREDIENTS BY RECIPE
        //     this.is.getIngredient(this.dataRecipe[0]).subscribe(
        //       data => {
        //         this.dataIngredient = data;
        //         console.log(this.dataIngredient);
        //       },
        //       error => {
        //         error = "CANNOT GET INGREDIENTS.";
        //     console.log(error)
        //       }
        //     )
        //   },
        //   error => {
        //     error = "CANNOT GET RECIPES.";
        // console.log(error)
        //   }
        // )
      },
      error => {
        error = "CANNOT GET COOKBOOKS.";
    console.log(error)
      }
    )
  }
  

  test2(){

    //GET MEALPLANS BY USER
    this.mps.getMealPlans(this.user).subscribe(
      data => {
        this.dataMealplan = data;
        console.log(this.dataMealplan);
        //GET MEAL BY MEALPLAN
        this.rs.getRecipes(this.dataMealplan[0]).subscribe(
          data => {
            this.dataMeal = data;
            console.log(this.dataMeal);
          },
          error => {
            error = "CANNOT GET MEAL.";
        console.log(error)
          }
        )
      },
      error => {
        error = "CANNOT GET MEALPLANS.";
    console.log(error)
      }
    )
  }

}
>>>>>>> d1dc41598ff20afaf53b3ad377899649e580a6ba
