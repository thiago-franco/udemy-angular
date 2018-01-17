import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chocolate Cake', 'A classic recipe', 'https://www.gimmesomeoven.com/wp-content/uploads/2011/03/flourless-chocolate-cake.jpg'),
    new Recipe('Chocolate Cake', 'A classic recipe', 'https://www.gimmesomeoven.com/wp-content/uploads/2011/03/flourless-chocolate-cake.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
