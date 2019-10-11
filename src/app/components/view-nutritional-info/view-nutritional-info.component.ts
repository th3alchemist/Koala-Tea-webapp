import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';
import { Router } from '@angular/router';
import { SpoonService } from 'src/app/services/spoon/spoon.service';

@Component({
  selector: 'app-view-nutritional-info',
  templateUrl: './view-nutritional-info.component.html',
  styleUrls: ['./view-nutritional-info.component.css']
})
export class ViewNutritionalInfoComponent implements OnInit {

  constructor(private ss:SpoonService,
    private loginService:LoginService, private router:Router) { }

  results:any;
  query:string;
  isItHidden:boolean;
  currentUserId:number;
  ngOnInit() {
    this.currentUserId = this.loginService.currentUserId

    if(this.currentUserId === undefined || this.currentUserId < 0) {
      this.router.navigate([""]);
    }
    this.isItHidden = true;
  }

  

  onSearch() {
    if((this.query !== undefined) && (this.query.length > 3)) {
      this.ss.searchNutrition(this.query).subscribe(
        data => {
          this.results = data
          if(this.results.answer !== null) {
            let textArea = <HTMLInputElement>document.getElementById("nutritionInfo");
            console.log(this.results)
            textArea.value = this.results.answer;
            this.isItHidden = false;
          }
          
        }
      );
    }
  }

}
