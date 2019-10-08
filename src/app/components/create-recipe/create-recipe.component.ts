import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  units: String[] = ["mL", "cup", "teaspoon", "tablespoon"];

 


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
    input1.setAttribute("class", "form-control");
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
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", "amount");
    input2.setAttribute("placeholder", "Amount");
    input1.setAttribute("name", "amount");
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
    input3.setAttribute("class", "form-control");
    for(var i = 0; i < this.units.length; i++){
      let option = document.createElement('option');
      option.value = i.toString();
      option.innerText = this.units[i].toString();
      input3.appendChild(option);
    }
    div3.appendChild(label3);
    div3.appendChild(input3);

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    field.appendChild(div);

  }
  
}
