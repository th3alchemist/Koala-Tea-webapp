import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Cookbook } from 'src/app/classes/cookbook';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service'
import { LoginService } from 'src/app/services/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {
  
  constructor(private cs:CookbookService, private loginService:LoginService, private router:Router) { }

  data:any

  ngOnInit() {
    this.currentUserId = this.loginService.currentUserId

    if(this.currentUserId === undefined || this.currentUserId < 0) {
      this.router.navigate([""]);
    }
  }

  currentUserId:number;

  onSubmit(){
    let title = <HTMLInputElement>document.getElementById("title")
    let description = <HTMLInputElement>document.getElementById("description")
    // let recipe = <HTMLInputElement>document.getElementById("recipe")

    var u = new User(this.currentUserId, "", "", "", "", "", "");
    var cb = new Cookbook(0, title.value, description.value, true, u)
    
    console.log(JSON.stringify(cb))
    this.cs.save(cb).subscribe(
      data => {
        this.data = data;
        this.router.navigate(["/dashboard"]);
      })
  }
}