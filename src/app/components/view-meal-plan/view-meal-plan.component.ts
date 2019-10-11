import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { MealService } from 'src/app/services/mealService/meal.service';
import { MealplanService } from 'src/app/services/mealplanService/mealplan.service';
import { Mealplan } from 'src/app/classes/mealplan';
import { Meal } from 'src/app/classes/meal';

@Component({
  selector: 'app-view-meal-plan',
  templateUrl: './view-meal-plan.component.html',
  styleUrls: ['./view-meal-plan.component.css']
})
export class ViewMealPlanComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router,
              private ms:MealService, private mps:MealplanService) { }

  currentUserId:number;

  ngOnInit() {
    this.currentUserId = this.loginService.currentUserId;

    // if(this.currentUserId === undefined || this.currentUserId < 0) {
    //   this.router.navigate([""]);
    // }

    this.getMealPlans();

  }

  user:User;
  mealplans:Mealplan[] = [];
  meals:Meal[] = []

  getMealPlans(){
    this.user = new User(1, "", "", "", "", "", "");
    // this.user = new User(this.currentUserId, "", "", "", "", "", "");
    this.mps.getMealPlans(this.user).subscribe(
      data => {
        this.mealplans = data;
        this.validMealplans(this.mealplans)
        console.log(this.mealplans.length)
      },
      error => {
        error = "Sorry. Couldn't get those mealplans!"
        console.log(error);
      }

    )
  }

  d = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('T')[0];
  d1 = new Date(Date.now());//11
  d2 = new Date(Date.now() + (24 * 60 * 60 * 1000));//12
  d3 = new Date(Date.now() + (24 * 60 * 60 * 1000)*2);//13
  d4 = new Date(Date.now() + (24 * 60 * 60 * 1000)*3);//14
  d5 = new Date(Date.now() + (24 * 60 * 60 * 1000)*4);//15
  d6 = new Date(Date.now() + (24 * 60 * 60 * 1000)*5);//16
  d7 = new Date(Date.now() + (24 * 60 * 60 * 1000)*6);//17
  
  list:string[] = [(this.d1.toString().split('GMT')[0]).split('T')[0], (this.d2.toString().split('GMT')[0]).split('T')[0], (this.d3.toString().split('GMT')[0]).split('T')[0],
  (this.d4.toString().split('GMT')[0]).split('T')[0], "Tue Oct 15 2019 01:50:57",
  (this.d6.toString().split('GMT')[0]).split('T')[0], "Thur Oct 17 2019 01:50:57"];
  

  validMealplans(mealplans){
    let validPlans:Mealplan[] = [];
    for(var i=0; i<mealplans.length; i++){
      let mealplandate = new Date(mealplans[i].day)
      if(mealplandate >= this.d1 && mealplandate <= this.d7) {
        console.log(mealplans[i].day)
        validPlans.push(mealplans[i])
      }
    }
    console.log(validPlans.length)

    let thead = document.querySelector('thead')
    let tbody = document.querySelector('tbody')
    let tr = document.createElement('tr')
    for(var j=0; j<validPlans.length; j++){
      let th = document.createElement('th')
      th.innerText = validPlans[j].day
      thead.appendChild(th)
      this.ms.getMeals(validPlans[j]).subscribe(
        data => {
          this.meals = data;
          for(var k=0; k<this.meals.length;k++){
            console.log("meal inside 2nd for = " + this.meals)
            let td = document.createElement('td')
            td.innerText = this.meals[k].title + " " + this.meals[k].course +  " " + this.meals[k].time
            tr.appendChild(td)
          } 
          tbody.appendChild(tr) 
        },
        error => {
          console.log("error getting meals")
        }
      )
      
    }
  }

}
