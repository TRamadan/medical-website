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
      import(
        './components/home-component/booking/booking-form/booking-form.component'
      ).then((c) => c.BookingFormComponent),
  },

  {
    path: 'aboutus',
    loadComponent: () =>
      import(
        './components/home-component/about-us-section/about-us-section.component'
      ).then((c) => c.AboutUsSectionComponent),
  },

  {
    path: 'knowledgehub',
    loadComponent: () =>
      import(
        './components/home-component/educational-videos/educational-videos.component'
      ).then((c) => c.EducationalVideosComponent),
  },

  {
    path: 'itemDetails',
    loadComponent: () =>
      import(
        './components/home-component/education-item-details/education-item-details.component'
      ).then((c) => c.EducationItemDetailsComponent),
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
