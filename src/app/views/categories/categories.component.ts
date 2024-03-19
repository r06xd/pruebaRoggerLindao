import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categories } from '@interfaces/categories/categories';
import { CategoriesServices } from '@service/categories.service';
import { categoriesComponents } from './components/categories-components';

@Component({
  selector: 'categories',
  standalone: true,
  imports: [CommonModule, ...categoriesComponents],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  categories: Categories[] = new CategoriesServices().getCategories();
  showForm: boolean = false;

  showFormFn(): void {
    this.showForm = !this.showForm;
  }

  addDataFn(category: Categories): void {
    category.id = this.categories.length + 1;
    // this.categories.push(category);
    this.categories = [...this.categories, category];
    this.showForm = false;
  }
}
