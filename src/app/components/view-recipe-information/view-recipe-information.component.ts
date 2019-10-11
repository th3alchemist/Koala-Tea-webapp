import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transferService/transfer.service';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipeService/recipe.service';
import { IngredientService } from 'src/app/services/ingredientService/ingredient.service';
import { Recipe } from 'src/app/classes/recipe';

@Component({
  selector: 'app-view-recipe-information',
  templateUrl: './view-recipe-information.component.html',
  styleUrls: ['./view-recipe-information.component.css']
})
export class ViewRecipeInformationComponent implements OnInit {
data = this.transferService.getData();      
  constructor(private transferService:TransferService, private rs:RecipeService,
    private router:Router, private is:IngredientService) {
      if(this.data){
        console.log(this.data.id)
        this.displayIngredients(this.data)
      }
      else{
        this.router.navigateByUrl('/viewRecipes');
      }
    }

  ngOnInit() {
  }
  recipe:Recipe;
  ingredientlist:any;

  displayIngredients(recipe){
    console.log("ID" + recipe.id)
    this.rs.getRecipeById(recipe.id).subscribe(
      data => {
        this.recipe = data;
        //POPULATE RECIPE INFORMATION
        let recipeOfficial = <HTMLInputElement>document.getElementById('cookbook')
        recipeOfficial.value = this.recipe.cookBook.title
        let recipeTitle = <HTMLInputElement>document.getElementById('title')
        recipeTitle.value = this.recipe.title
        let recipeInstructions = <HTMLInputElement>document.getElementById('instructions')
        recipeInstructions.value = this.recipe.instructions
        //GET LIST OF INGREDIENTS
        this.is.getIngredient(this.recipe).subscribe(
          data => {
            this.ingredientlist = data

            //POPULATE INGREDIENT LIST
            let tbody = document.querySelector('tbody');
            for(var i=0; i<this.ingredientlist.length; i++){
              let num = i+1;
              let tr = document.createElement('tr')
              let td1 = document.createElement('td')
              let td2 = document.createElement('td')
              let td3 = document.createElement('td')
              let td4 = document.createElement('td')
              td1.innerText = num.toString();
              td2.innerText = this.ingredientlist[i].name
              td3.innerText = this.ingredientlist[i].amount
              td4.innerText = this.ingredientlist[i].unit.unit
              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);
              tr.appendChild(td4);
              tbody.appendChild(tr);
            }
          },
          error => {
            console.log("Can't get those ingredients!")
          }
        )
      },
      error => {
        error = "Sorry. Couldn't get that recipe!"
        console.log(error);
      }

    )

  }
}
