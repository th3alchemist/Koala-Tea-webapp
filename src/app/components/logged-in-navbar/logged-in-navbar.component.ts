import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  logout() {
    console.log("logout button works")
  }

  user:string = this.loginService.currentUserName;

}
