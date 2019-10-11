import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-meal-plan',
  templateUrl: './view-meal-plan.component.html',
  styleUrls: ['./view-meal-plan.component.css']
})
export class ViewMealPlanComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  currentUserId:number;

  ngOnInit() {
    this.currentUserId = this.loginService.currentUserId;

    if(this.currentUserId === undefined || this.currentUserId < 0) {
      this.router.navigate([""]);
    }
  }

}
