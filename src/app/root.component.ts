// cSpell:disable
import { Component } from '@angular/core';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';

@Component({
    standalone: true,
    selector: 'root',
    imports: [DashboardComponent],
    template: `
        <dashboard></dashboard>
    `
})
export class RootComponent { }
//git push -u origin main
