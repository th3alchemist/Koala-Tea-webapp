import { Component, OnInit, ɵConsole } from '@angular/core';
import { Unit } from 'src/app/classes/unit';
import { UnitService } from 'src/app/services/unitService/unit.service';
import { Recipe } from 'src/app/classes/recipe';
import { Ingredient } from 'src/app/classes/ingredient';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cookbook } from 'src/app/classes/cookbook';
import { User } from 'src/app/classes/user';
import { RecipeService } from 'src/app/services/recipeService/recipe.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(private us:UnitService, private rs:RecipeService,
              private router:Router, private loginService:LoginService) { }

  ngOnInit() {
    this.getAllUnits();
  }

  currentUserId = this.loginService.currentUserId;
  data:any;

  units: Unit[] = [];

  getAllUnits(){
    this.us.getAllUnits().subscribe(
      data => {
        this.units = data;
        console.log(this.units);
      },
      error => {
        error = "Sorry. Couldn't get those units!"
        console.log(error);
      }

    )
  }

  // cooklist : Array<Cookbook> = [];
  cookbook:Number[] = [1,2];
  // //CHECKBOX FOR PUBLIC
  
  isChecked:boolean = false;

  check(){
    console.log("current: " + this.isChecked)
    this.isChecked = !this.isChecked;
    console.log("now: " + this.isChecked)
  }

counter:number = 1;

  addAnother(){
    let field = document.getElementById('ingredient_block');
    let div = document.createElement('div');
    div.setAttribute("class", "form-group form-row col-md-12");
    //INGREDIENT INPUT
    let div1 = document.createElement('div');
    div1.setAttribute("class", "form-group col-md-4");
    let label1 = document.createElement('label');
    label1.setAttribute("for", "ingredients");
    label1.innerHTML = "Ingredient";
    let input1 = document.createElement('input');
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "ingredient form-control");
    input1.setAttribute("id", "ingredients");
    input1.setAttribute("placeholder", "Ingredients");
    input1.setAttribute("name", "ingredient");
    div1.appendChild(label1);
    div1.appendChild(input1);
    //AMOUNT INPUT
    let div2 = document.createElement('div');
    div2.setAttribute("class", "form-group col-md-4");
    let label2 = document.createElement('label');
    label2.setAttribute("for", "amount");
    label2.innerHTML = "Amount";
    let input2 = document.createElement('input');
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "amount form-control");
    input2.setAttribute("id", "amount");
    input2.setAttribute("placeholder", "Amount");
    input2.setAttribute("name", "amount");
    div2.appendChild(label2);
    div2.appendChild(input2);
    //UNIT INPUT
    let div3 = document.createElement('div');
    div3.setAttribute("class", "form-group col-md-4");
    let label3 = document.createElement('label');
    label3.setAttribute("for", "unit");
    label3.innerHTML = "Unit";
    let input3 = document.createElement('select');
    input3.setAttribute("id", "unit");
    input3.setAttribute("name", "unit");
    input3.setAttribute("class", "unit form-control");
    for(var i = 0; i < this.units.length; i++){
      let option = document.createElement('option');
      option.value = this.units[i].$id.toString();
      option.innerText = this.units[i].$unit;
      input3.appendChild(option);
    }
    div3.appendChild(label3);
    div3.appendChild(input3);

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    field.appendChild(div);
    this.counter += 1;
    console.log(this.counter);
  }
  listOfIngredientName : string [] = [];
  listOfIngredientAmount : number [] = [];
  listOfIngredientUnit : number [] = [];
  

  submitRecipe(){
    console.log("current user id = " + this.currentUserId);
    let cookbookid = Number((<HTMLInputElement>document.getElementById('cookbook')).value)
    let title = (<HTMLInputElement>document.getElementById('title')).value
    let shared = Boolean((<HTMLInputElement>document.getElementById('public_check')).value)
    let instruction = (<HTMLInputElement>document.getElementById('instructions')).value
    let ingredients = (<HTMLCollection>document.getElementsByClassName('formbox'))[0];
    
    for(var i=0; i<this.counter; i++){
      this.listOfIngredientName.push((<HTMLInputElement>ingredients.getElementsByClassName("ingredient")[i]).value);
      this.listOfIngredientAmount.push(Number((<HTMLInputElement>ingredients.getElementsByClassName("amount")[i]).value));
      this.listOfIngredientUnit.push(Number((<HTMLInputElement>ingredients.getElementsByClassName("unit")[i]).value))
    }
   console.log("checkbox " + shared)
    //THIS SUBMITS RECIPE OBJECT ONLY
    this.rs.submitRecipe(cookbookid, title, shared, instruction).subscribe(
      data => {
          this.data = data;
          console.log(this.data);
          //AFTER SUBMITTING RECIPE, RECIPE OBJECT IS RETURNED. THEN SUBMIT INGREDIENT WHICH NEEDS THE RECIPE OBJECT
          this.rs.submitIngredient(this.data, this.listOfIngredientName, this.listOfIngredientAmount, this.listOfIngredientUnit).subscribe(
            data => {
              this.data = data;
              console.log(this.data);
              if(this.data !== null){
                this.router.navigate(['/cookbook']);
              }
            },
            error => {
              error = "INGREDIENT INSERT FAIL.";
          console.log(error)
            }
          )
      },
      error => {
        error = "RECIPE INSERT FAIL.";
        console.log(error)
      }
    );
  }
  
}
