import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateUserAccountComponent } from './components/create-user-account/create-user-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewIngredientComponent } from './components/view-ingredient/view-ingredient.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    CookbookComponent,
    CreateRecipeComponent,
    CreateUserAccountComponent,
    DashboardComponent,
    ViewIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
