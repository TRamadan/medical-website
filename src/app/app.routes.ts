import { Routes } from '@angular/router';
import { IntakeFormComponent } from "./intake-form/intake-form.component";
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home-component/home-component.component').then(
        (c) => c.HomeComponentComponent
      ),
  },

  {
    path: 'intake-form',
    component: IntakeFormComponent,
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
    path: 'oursolutions',
    loadComponent: () =>
      import(
        './components/home-component/our-solutions/our-solutions.component'
      ).then((c) => c.OurSolutionsComponent),
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




];

