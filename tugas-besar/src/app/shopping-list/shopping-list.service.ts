
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';



export class ShoppingListService {
  IngredientChance = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients:Ingredient[]=[
    new Ingredient('Apples',23),
    new Ingredient('Tomato',10),
    ];


constructor() { }

    getIngredients(){
      return this.ingredients.slice();
    }
    getIngredient(index : number){
      return this.ingredients[index];
    }
    addIngredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.IngredientChance.next(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[]){
      this.ingredients.push(...ingredients);
      this.IngredientChance.next(this.ingredients.slice());
    }
    updateIngredient(index:number, newIngredient : Ingredient){
      this.ingredients[index] = newIngredient;
      this.IngredientChance.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
      this.ingredients.splice(index, 1);
      this.IngredientChance.next(this.ingredients.slice());
    }
}
