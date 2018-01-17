import { Component } from "@angular/core";
import { Ingredient } from "../recipes-book/recipes-list/recipe-item/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('flour', 1),
        new Ingredient('sugar', 0.5),
        new Ingredient('chocolate', 1)
    ];

}