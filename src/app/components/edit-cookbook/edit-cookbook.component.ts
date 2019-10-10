import { Component, OnInit } from '@angular/core';
import { Cookbook } from 'src/app/classes/cookbook';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service'
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-edit-cookbook',
  templateUrl: './edit-cookbook.component.html',
  styleUrls: ['./edit-cookbook.component.css']
})
export class EditCookbookComponent implements OnInit {

  constructor(private cs:CookbookService) { }

  cb:Cookbook

  ngOnInit() {
  }

  getCookbookById(){
    let id = <HTMLInputElement>document.getElementById("id")

    this.cs.getById(parseInt(id.value)).subscribe(
      data => {
        this.cb = JSON.parse(JSON.stringify(data))
        let title = <HTMLInputElement>document.getElementById("title")
        let description = <HTMLInputElement>document.getElementById("description")

        title.value = this.cb.title
        description.value = this.cb.description
      })
  }

  saveCookbook(){
    let id = (<HTMLInputElement>document.getElementById("id")).value
    let title = (<HTMLInputElement>document.getElementById("title")).value
    let description = (<HTMLInputElement>document.getElementById("description")).value

    var u = new User(1, "email", "pwd", "fname", "lname", "address", "1996-12-17")
    var cb = new Cookbook(parseInt(id), title, description, true, u)

    this.cs.save(cb).subscribe(
      data => {})
  }
}
