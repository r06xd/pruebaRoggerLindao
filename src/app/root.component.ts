import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'root',
    template: `
    <h1 class='w-full text-center'>Hola mundo {{title}}</h1>
    <div [style]="'font-size: 100px'">{{counter}}</div>
    <button type="button" 
    (click)="increment()" 
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Aumentar</button>
    <button type="button" 
    (click)="decrement()" 
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Decrementar</button>
    `
})
export class RootComponent {
    title = 'Jorlan';
    img = 'https://angular.io/assets/images/logos/angular/angular.svg';

    counter: number = 0;

    constructor() {
        this.title += ' Elizalde';
    }

    increment(): void {
        this.counter += 1;
    }

    decrement(): void {
        this.counter -= 1;
    }

}
