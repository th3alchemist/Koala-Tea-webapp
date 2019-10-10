import { Component, OnInit } from '@angular/core';
import { MealplanService } from 'src/app/services/mealplanService/mealplan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-meal-plan',
  templateUrl: './create-meal-plan.component.html',
  styleUrls: ['./create-meal-plan.component.css']
})
export class CreateMealPlanComponent implements OnInit {

  constructor(private mps:MealplanService,private router:Router) { }

  ngOnInit() {
  }

  //GET THE ACTUAL USER ID OKAY
  userid:number = 1;

  courses:string[] = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];

  data:any;

  counter:number = 1;

  addAnother(){
    let field = document.getElementById('mealplan_block');
    let div = document.createElement('div');
    div.setAttribute("class", "form-group form-row col-md-12");
    
    //COURSE INPUT
    let div3 = document.createElement('div');
    div3.setAttribute("class", "form-group col-md-6");
    let label3 = document.createElement('label');
    label3.setAttribute("for", "course");
    label3.innerHTML = "Course";
    let input3 = document.createElement('select');
    input3.setAttribute("id", "course");
    input3.setAttribute("name", "course");
    input3.setAttribute("class", "course form-control");
    for(var i = 0; i < this.courses.length; i++){
      let option = document.createElement('option');
      option.value = this.courses[i];
      option.innerText = this.courses[i];
      input3.appendChild(option);
    }
    
    //TITLE INPUT
    let div2 = document.createElement('div');
    div2.setAttribute("class", "form-group col-md-12");
    let label2 = document.createElement('label');
    label2.setAttribute("for", "meal");
    label2.innerHTML = "Meal";
    let input2 = document.createElement('input');
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "meal form-control");
    input2.setAttribute("id", "meal");
    input2.setAttribute("placeholder", "Meal");
    input2.setAttribute("name", "meal");
    

    //TIME INPUT
    let div1 = document.createElement('div');
    div1.setAttribute("class", "form-group col-md-6");
    let label1 = document.createElement('label');
    label1.setAttribute("for", "time");
    label1.innerHTML = "Time";
    let input1 = document.createElement('input');
    input1.setAttribute("type", "time");
    input1.setAttribute("class", "time form-control");
    input1.setAttribute("id", "time");
    input1.setAttribute("name", "time");

    div2.appendChild(label2);
    div2.appendChild(input2);

    div1.appendChild(label1);
    div1.appendChild(input1);
    
    div3.appendChild(label3);
    div3.appendChild(input3);

    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div1);
    

    field.appendChild(div);
    this.counter += 1;
    console.log(this.counter);
  }
  listOfTitle : string[] = [];
  listOfCourse : string [] = [];
  listOfTime : string [] = [];

  submitMealPlan(){
    let date = (<HTMLInputElement>document.getElementById('date')).value
    let ingredients = (<HTMLCollection>document.getElementsByClassName('formbox'))[0];
    
    for(var i=0; i<this.counter; i++){
      this.listOfTitle.push((<HTMLInputElement>ingredients.getElementsByClassName("meal")[i]).value);
      this.listOfCourse.push((<HTMLInputElement>ingredients.getElementsByClassName("course")[i]).value);
      this.listOfTime.push((<HTMLInputElement>ingredients.getElementsByClassName("time")[i]).value);
    }

    //THIS SUBMITS RECIPE OBJECT ONLY
    this.mps.submitMealPlan(this.userid, date).subscribe(
      data => {
          this.data = data;
          console.log(this.data);
          //AFTER SUBMITTING RECIPE, RECIPE OBJECT IS RETURNED. THEN SUBMIT INGREDIENT WHICH NEEDS THE RECIPE OBJECT
          this.mps.submitMeal(this.data, this.listOfTitle, this.listOfCourse, this.listOfTime).subscribe(
            data => {
              this.data = data;
              console.log(this.data);
              if(this.data !== null){
                this.router.navigate(['/dashboard']);
              }
            },
            error => {
              error = "MEAL INSERT FAIL.";
          console.log(error)
            }
          )
      },
      error => {
        error = "MEALPLAN INSERT FAIL.";
        console.log(error)
      }
    );


  }
}
