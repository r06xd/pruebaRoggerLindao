import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderDashboardComponent } from '@shared/header-dashboard/header-dashboard.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { views } from '../../views/views';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeaderDashboardComponent, ...views],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  indexMenuSelected: number = 0;
}
