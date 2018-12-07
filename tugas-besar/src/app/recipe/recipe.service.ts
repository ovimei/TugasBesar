import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slsService:ShoppingListService) {}

  recipes:Recipe[]=[
    new Recipe('Kasembon Rafting','A fun white water rafting adventure in the village of Bayem, Kec Kasembon, Malang Regency which is fun and has Booms from a height of 1-3 meters and rapids - extreme rapids when the rafting begins. and is the best rafting in Malang and in East Java',
    'https://i.ytimg.com/vi/yf7OMr0W0_E/maxresdefault.jpg',[
      
    ]),
    new Recipe('Singhasari temple','Singhasari temple or Candi Singhasari is a 13th-century syncretic Hindu-Buddhist temple located in Singosari district, Malang Regency, East Java in Indonesia.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Candi_Singosari_B.JPG/300px-Candi_Singosari_B.JPG',[
      new Ingredient('Pangsit',2),
      new Ingredient('Sawi',3)
    ]),
    new Recipe('Malang Night Paradise','Malang Night Paradise is a family entertainment place in Malang with a glowing or sparkling theme that is unique in Malang, East Java. Malang Night Paradise offers 2 amusement parks in one location. This place also presents several replicas of Dinousaurus that triumphed in his era'
    ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1R92Fd04_5mnWSlh87Yl5xyxWQwKd3H2sgUQXuPKewseYBQEBg',[
      new Ingredient('Pangsit',2),
      new Ingredient('Sawi',3)
    ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  } 
  deleteRecipes(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }


}
