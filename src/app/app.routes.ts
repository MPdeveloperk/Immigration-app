import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:() =>
             import('./landing-home/landing-home').then(m => m.LandingHome),     
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login').then(m => m.Login),
        pathMatch: 'full'
    },
    {
        path: 'register', 
        loadComponent: () =>
            import('./register/register').then(m => m.Register),
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home').then(m => m.Home),
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./cartel/cartel').then(m => m.Cartel),
        pathMatch: 'full'
    },
];
