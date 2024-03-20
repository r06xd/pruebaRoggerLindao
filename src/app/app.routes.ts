import { Routes } from '@angular/router';
import { CategoriesServices } from '@service/categories.service';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
        children: [
            {
                path: 'categories',
                loadComponent: () => import('./views/categories/categories.component').then((m) => m.CategoriesComponent),
                providers: [CategoriesServices]

            },
            {
                path: 'customers',
                loadComponent: () => import('./views/customers/customers.component'),
            },
            {
                path: 'menu',
                loadComponent: () => import('./views/menu/menu.component'),
            },
            {
                path: 'orders',
                loadComponent: () => import('./views/orders/orders.component'),
            },
            {
                path: '',
                redirectTo: 'categories',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'sign-in',
        loadComponent: () => import('./pages/sign-in/sign-in.component')
    },
    {
        path: 'sign-out',
        loadComponent: () => import('./pages/sign-out/sign-out.component')
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }

];
