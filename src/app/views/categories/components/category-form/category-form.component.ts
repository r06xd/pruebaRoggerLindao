import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();

  hideFormFn(): void {
    this.hide.emit(true);
  }
}
