// cSpell:disable
import { Component } from '@angular/core';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { TempComponent } from './temp.component';

@Component({
    standalone: true,
    selector: 'root',
    imports: [DashboardComponent, TempComponent],
    templateUrl: './root.component.html'
})
export class RootComponent {
    hideComponent: boolean = false;
    messageParent: number = 0;

}
//git push -u origin main
