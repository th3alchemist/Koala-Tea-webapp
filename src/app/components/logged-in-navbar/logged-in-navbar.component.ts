import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.user = this.loginService.currentUserName;
  }

  logout() {
    this.loginService.currentUserId=undefined;
    this.router.navigate(['/'])

  }

  user:string;

}
