import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component'
import { CookbookComponent } from './components/cookbook/cookbook.component'
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateUserAccountComponent } from './components/create-user-account/create-user-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewIngredientComponent } from './components/view-ingredient/view-ingredient.component';
import { EditCookbookComponent } from './components/edit-cookbook/edit-cookbook.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cookbook",
    component: CookbookComponent
  },
  {
    path: "createRecipe",
    component: CreateRecipeComponent
  },
  {
    path: "createAccount",
    component: CreateUserAccountComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "ingredient",
    component: ViewIngredientComponent
  },
  {
    path: "editCookbook",
    component: EditCookbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
