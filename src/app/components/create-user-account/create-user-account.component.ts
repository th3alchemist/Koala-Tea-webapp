import { Component, OnInit } from '@angular/core';
import {CreateAccountService} from 'src/app/services/createUserAccountService/create-account.service';
import { User } from 'src/app/classes/user';
import {Router} from "@angular/router";


@Component({
  selector: 'create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {

  constructor(private createAccountService:CreateAccountService,
              private router: Router) { }

  ngOnInit() {
  }

  errorNum:number;
  errors:string[];

  firstName:string;
  lastName:string;
  dateOfBirth:string;
  address:string;
  email:string;
  password:string;
  confirmPassword:string;

  createAccount() {
    this.errorNum = 0;
    this.errors = [];
    let returnedUser:User;

    // first name check
    if(this.firstName == null) {
      this.errorNum++;
      this.errors.push("Please specify your First Name.");
    }
    else if (!(this.firstName.trim().length > 0)) {
      this.errorNum++;
      this.errors.push("Please specify your First Name.");
    }

    // last name check
    if(this.lastName == null) {
      this.errorNum++;
      this.errors.push("Please specify your Last Name.");
    }
    else if (!(this.lastName.trim().length > 0)) {
      this.errorNum++;
      this.errors.push("Please specify your Last Name.");
    }

    // DoB check
    if(this.dateOfBirth == null) {
      this.errorNum++;
      this.errors.push("Please specify your Date of Birth.");
    }

    // address check
    if(this.address == null) {
      this.errorNum++;
      this.errors.push("Please specify your Address.");
    }
    else if (!(this.address.trim().length > 0)) {
      this.errorNum++;
      this.errors.push("Please specify your Address.");
    }

    // email check
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
    else if (!(this.password.trim().length > 7)) {
      this.errorNum++;
      this.errors.push("Password length must be at least 8 characters.");
    }

    if(this.confirmPassword == null) {
      this.errorNum++;
      this.errors.push("Please specify your First Name.");
    }
    else if (!(this.confirmPassword.trim().length > 7)) {
      this.errorNum++;
      this.errors.push("Confirm password must match.");
    }
    else if(!(this.password.trim().length === this.confirmPassword.trim().length)) {
      this.errorNum++;
      this.errors.push("Passwords must match");
    }

    if(this.errorNum === 0) {

      this.createAccountService.submitCreateAccount(this.firstName, this.lastName, this.dateOfBirth, this.address, this.email, this.password)
                                                    .subscribe(
                                                            data => {
                                                              returnedUser = data;

                                                              if(returnedUser !== undefined) {    
                                                                                                                           
                                                                this.router.navigate(['/login']);
                                                              }
                                                            }
                                                      );
    }

  }
}
