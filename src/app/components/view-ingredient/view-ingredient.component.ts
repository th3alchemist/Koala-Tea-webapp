import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.css']
})
export class ViewIngredientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id:number;
  name:string;
  amount:number;
  recipe:string;
  unit:string;
}
