import { Component, OnInit } from '@angular/core';
import { Cookbook } from 'src/app/classes/cookbook';
import { CookbookService } from 'src/app/service/cookbook.service'
import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cs:CookbookService) { }

  data:any
  cb:Cookbook

  ngOnInit() {
  }

  getCookbookById(){
    let id = <HTMLInputElement>document.getElementById("id")

    this.cs.getById(id.value).subscribe(
      data => {
        this.data = data
        this.cb = JSON.parse(JSON.stringify(this.data))
        let title = <HTMLInputElement>document.getElementById("title")
        let description = <HTMLInputElement>document.getElementById("description")
        let recipe = <HTMLInputElement>document.getElementById("recipe")

        title.value = this.cb.title
        description.value = this.cb.description
      })
  }

  saveCookbook(){
    let id = <HTMLInputElement>document.getElementById("id")
    let title = <HTMLInputElement>document.getElementById("title")
    let description = <HTMLInputElement>document.getElementById("description")

    var u = new User(1, "email", "pwd", "fname", "lname", "address", new Date())
    var cb = new Cookbook(id.value, title.value, description.value, true, u)

    this.cs.save(cb).subscribe(
      data => {
        this.data = data;


        console.log("saved " + this.data);
      })
  }
}