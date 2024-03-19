import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { views } from '../../views/views';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeaderDashboardComponent } from '../../shared/header-dashboard/header-dashboard.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeaderDashboardComponent, ...views],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  indexMenuSelected: number = 0;
}
