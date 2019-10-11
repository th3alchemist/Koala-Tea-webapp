import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateUserAccountComponent } from './components/create-user-account/create-user-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCookbookComponent } from './components/edit-cookbook/edit-cookbook.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { LoggedInNavbarComponent } from './components/logged-in-navbar/logged-in-navbar.component';
import { CreateMealPlanComponent } from './components/create-meal-plan/create-meal-plan.component';
import { ViewRecipesComponent } from './components/view-recipes/view-recipes.component';


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
    EditCookbookComponent,
    SearchRecipeComponent,
    LoggedInNavbarComponent,
    CreateMealPlanComponent,
    ViewRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
