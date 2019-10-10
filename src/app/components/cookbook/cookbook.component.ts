import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Cookbook } from 'src/app/classes/cookbook';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service'

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {
  
  constructor(private cs:CookbookService) { }

  data:any

  ngOnInit() {
  }

  onSubmit(){
    let title = <HTMLInputElement>document.getElementById("title")
    let description = <HTMLInputElement>document.getElementById("description")
    let recipe = <HTMLInputElement>document.getElementById("recipe")

    console.log(title)

    var u = new User(1, "email", "pwd", "fname", "lname", "address", "1996-12-17")
    var cb = new Cookbook(-1, title.value, description.value, true, u)
    
    console.log(JSON.stringify(cb))
    this.cs.save(cb).subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      })
  }
}