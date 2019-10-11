import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component'
import { CookbookComponent } from './components/cookbook/cookbook.component'
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateUserAccountComponent } from './components/create-user-account/create-user-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCookbookComponent } from './components/edit-cookbook/edit-cookbook.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { CreateMealPlanComponent } from './components/create-meal-plan/create-meal-plan.component';
import { ViewRecipesComponent } from './components/view-recipes/view-recipes.component';
import { ViewRecipeInformationComponent } from './components/view-recipe-information/view-recipe-information.component';
import { ViewMealPlanComponent } from './components/view-meal-plan/view-meal-plan.component';
import { ViewNutritionalInfoComponent } from './components/view-nutritional-info/view-nutritional-info.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "viewMealPlan",
    component: ViewMealPlanComponent
  },
  {
    path: "nutritionInfo",
    component: ViewNutritionalInfoComponent,
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
    path: "editCookbook",
    component: EditCookbookComponent
  },
  {
    path: "searchRecipe",
    component: SearchRecipeComponent
  },
  {
    path: "createMealPlan",
    component: CreateMealPlanComponent
  },
  {
    path: "viewRecipes",
    component: ViewRecipesComponent
  },
  {
    path: "viewRecipeInformation",
    component: ViewRecipeInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
