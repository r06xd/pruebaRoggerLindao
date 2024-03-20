import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { Categories } from '@interfaces/categories/categories';
import { CategoriesServices } from '@service/categories.service';
import { categoriesComponents } from './components/categories-components';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'categories',
  standalone: true,
  imports: [CommonModule, ...categoriesComponents],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  private categoryService = inject(CategoriesServices);

  // categories: Signal<Categories[] | undefined> = toSignal(this.categoryService.getAllCategories());//this.categoryService.getCategories();
  categories: Signal<Categories[] | undefined> = toSignal(this.categoryService.allCategories$);
  showForm: boolean = false;

  // constructor() {
  //   this.getAllCategories();
  // }

  showFormFn(): void {
    this.showForm = !this.showForm;
  }

  addDataFn(category: Categories): void {
    category.id = this.categories()!.length + 1;
    // this.categories.push(category);
    this.categoryService.postNewCategory(category).subscribe(console.log);
    this.showForm = false;
  }


  private getAllCategories(): void {
    // this.categoryService.getAllCategories().subscribe((response) => this.categories = response);
    this.categoryService.getAllCategories().subscribe(console.log);
  }
}
