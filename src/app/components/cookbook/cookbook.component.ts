import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Cookbook } from 'src/app/classes/cookbook';
import { CookbookService } from 'src/app/service/cookbook.service'

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
    //let title = <HTMLInputElement>document.getElementsByName("title")[0]
    //let description = <HTMLInputElement>document.getElementsByName("description")[0].value
    //let recipe = <HTMLInputElement>document.getElementsByName("recipe")[0].value

    var u = new User(-1, "email", "pwd", "fname", "lname", "address", new Date())
    var cb = new Cookbook(-1, "title", "description", true, u)
    
    console.log(JSON.stringify(cb))
    this.cs.save(cb).subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      })
  }
}