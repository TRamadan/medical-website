import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home-component/home-component.component').then(
        (c) => c.HomeComponentComponent
      ),
  },
];
