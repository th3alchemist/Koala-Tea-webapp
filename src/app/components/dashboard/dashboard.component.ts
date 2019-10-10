import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  currentUserId:number;
  ngOnInit() {
    this.currentUserId = this.loginService.currentUserId

    if(this.currentUserId === undefined || this.currentUserId < 0) {
      this.router.navigate([""]);
    }
  }


}