import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home-component/home-component.component').then(
        (c) => c.HomeComponentComponent
      ),
  },

  {
    path: 'bookappointment',
    loadComponent: () =>
      import('./components/home-component/booking/booking-form/booking-form.component').then(
        (c) => c.BookingFormComponent
      ),
  },

  {
    path: 'auth',
    loadComponent: () =>
      import('./components/auth/auth.component').then((c) => c.AuthComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/auth/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
