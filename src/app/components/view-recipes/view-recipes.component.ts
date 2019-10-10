import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transferService/transfer.service';
import { Router } from '@angular/router';
import { CookbookService } from 'src/app/service/cookbook.service';
import { IngredientService } from 'src/app/services/ingredientService/ingredient.service';
import { MealplanService } from 'src/app/services/mealplanService/mealplan.service';
import { RecipeService } from 'src/app/services/recipeService/recipe.service';
import { MealService } from 'src/app/services/mealService/meal.service';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  data = this.transferService.getData();
  dataCookbook:any; 
  dataRecipe:any;
  dataIngredient:any;
  dataMealplan:any;
  dataMeal:any;
  constructor(private transferService:TransferService,
    private router:Router,private cbs:CookbookService,private mps:MealplanService, 
    private ms:MealService, private is:IngredientService, 
    private rs:RecipeService) {
      console.log("IN VIEW RECIPES TS");
      if(this.data){
        //GET RECIPE BY COOKBOOK
        this.rs.getRecipes(this.data[0]).subscribe(
          data => {
            this.dataRecipe = data;
            console.log(this.dataRecipe);
           
            //GET INGREDIENTS BY RECIPE
            this.is.getIngredient(this.dataRecipe[0]).subscribe(
              data => {
                this.dataIngredient = data;
                console.log(this.dataIngredient);
              },
              error => {
                error = "CANNOT GET INGREDIENTS.";
            console.log(error)
              }
            )
          },
          error => {
            error = "CANNOT GET RECIPES.";
        console.log(error)
          }
        )
      }
      else{
        this.router.navigateByUrl('/sender');
      }
     }

  ngOnInit() {
  }

  
  
}
