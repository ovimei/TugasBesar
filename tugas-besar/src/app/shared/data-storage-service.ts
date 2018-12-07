import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipe/recipe.service";

@Injectable()
export class DataStorageService{
 constructor(private http:Http, private recipeService: RecipeService){}
 storeRecepies(){
 return this.http.put('https://ng-recipe-book-1bce1.firebaseio.com/recipes.json',this.recipeService
 .getRecipes());
 }
}