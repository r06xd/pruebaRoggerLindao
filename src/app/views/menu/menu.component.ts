import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  viewProviders: [provideIcons({ octPlus })]
})
export default class MenuComponent {

}
