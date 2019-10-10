import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';
import { User } from 'src/app/classes/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let returnedUser:User;
    this.errors = [];
    this.errorNum = 0;

    if(this.email == null) {
      this.errorNum++;
      this.errors.push("Please specify your email.")
    }
    else if (!(this.email.trim().length > 0)) {
      this.errorNum++;
      this.errors.push("Please specify your email.");
    } 
    else if(!(this.email.includes("@") && this.email.includes("."))) {
      this.errorNum++;
      this.errors.push("Please format a correct email.");
    }

    // password check
    if(this.password == null) {
      this.errorNum++;
      this.errors.push("Please enter Password.");
    }
    if(this.errorNum === 0) { 
      this.loginService.submitLoginForm(this.email, this.password).subscribe(
        data => {
          returnedUser = data;

          if(returnedUser !== undefined) {
            if(returnedUser !== null) {
              this.loginService.currentUserId = returnedUser.id;
              this.loginService.currentUserName = returnedUser.fname;                                                        
              this.router.navigate(['/dashboard']);
            } else {
              this.errorNum++;
              this.errors.push("Incorrect Username and Password");
              // show errors on login page
            }
          }
        }
      );
    }

  }

  errorNum:number;
  errors:string[];
  email:string;
  password:string;

}
