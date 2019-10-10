import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transferService/transfer.service';
import { Router } from '@angular/router';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';
import { IngredientService } from 'src/app/services/ingredientService/ingredient.service';
import { MealplanService } from 'src/app/services/mealplanService/mealplan.service';
import { RecipeService } from 'src/app/services/recipeService/recipe.service';
import { MealService } from 'src/app/services/mealService/meal.service';
import { LoginService } from 'src/app/services/loginService/login.service';
import { User } from 'src/app/classes/user';
import { Cookbook } from 'src/app/classes/cookbook';
import { Recipe } from 'src/app/classes/recipe';
import { Mealplan } from 'src/app/classes/mealplan';
import { Meal } from 'src/app/classes/meal';
import { Ingredient } from 'src/app/classes/ingredient';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {

  constructor(private cbs:CookbookService,private mps:MealplanService, 
          private ms:MealService, private is:IngredientService, 
          private rs:RecipeService, private router:Router,
          private transferService:TransferService, private cs:CookbookService,
          private loginService:LoginService) { }
   
  ngOnInit() {
    this.getAllCookbooks();
  }

  currentUserId = this.loginService.currentUserId;
  
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

  cookbooks:Cookbook[] = [];
  getAllCookbooks(){
    console.log(this.currentUserId)
    this.cs.getCookbooks(this.user).subscribe(
      data => {
        this.cookbooks = data;
        console.log(this.cookbooks);
      },
      error => {
        error = "Sorry. Couldn't get those cookbooks!"
        console.log(error);
      }

    )
  }

  r:Recipe[] = [];
  mp:Mealplan[] = [];
  m:Meal[] = [];
  i:Ingredient[] = [];
  test(){
    console.log(Number((<HTMLInputElement>document.getElementById('cookbook')).value))
    let cookbookid = Number((<HTMLInputElement>document.getElementById('cookbook')).value)
    
    let cookbook = new Cookbook(cookbookid, "", "", true, this.user);
    // this.transferService.setData(cookbook);
    // this.router.navigate(['/viewRecipes']);

    this.rs.getRecipes(cookbook).subscribe(
      data => {
        this.dataRecipe = data;
        console.log(this.dataRecipe);
        this.displayRecipes();
        // //GET INGREDIENTS BY RECIPE
        // this.is.getIngredient(this.dataRecipe[0]).subscribe(
        //   data => {
        //     this.dataIngredient = data;
        //     console.log(this.dataIngredient);
        //   },
        //   error => {
        //     error = "CANNOT GET INGREDIENTS.";
        // console.log(error)
        //   }
        // )
      },
      error => {
        error = "CANNOT GET RECIPES.";
        console.log(error)
      }
    )
  }
  counter:number=0;
  displayRecipes(){
    let container = <HTMLElement>document.getElementById('here');
    console.log("counter " + this.counter++)
    console.log("current count " + document.getElementById('here').children.length)
    if(document.getElementById('here').children.length > 0){
      container.removeChild(document.getElementById('child'))
      let div = document.createElement('div');
      div.setAttribute("id", "child")
      div.innerHTML = "this.dataRecipe2";
      container.appendChild(div);
    }else{
      
      let div = document.createElement('div');
      div.setAttribute("id", "child")
      div.innerHTML = "this.dataRecipe";
      container.appendChild(div);
    }
    
  }

  test2(){

    //GET MEALPLANS BY USER
    this.mps.getMealPlans(this.user).subscribe(
      data => {
        this.dataMealplan = data;
        console.log(this.dataMealplan);
        this.transferService.setData(this.dataMealplan);
        this.router.navigate(['/viewRecipes']);
      },
      error => {
        error = "CANNOT GET MEALPLANS.";
        console.log(error)
      }
    )
  }
  
}
