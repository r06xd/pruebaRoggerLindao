import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() menuSelected = new EventEmitter<number>();
  menu: { title: string }[] = [
    {
      title: 'Categorias',
    },
    {
      title: 'Clientes',
    },
    {
      title: 'Menu',
    },
    {
      title: 'Ordenes',
    },
  ];

  selectMenu(index: number): void {
    this.menuSelected.emit(index);
  }

}
