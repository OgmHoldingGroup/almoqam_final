import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlogsDetailsComponent } from './pages/blogs-details/blogs-details.component';

export const routes: Routes = [
  { path: '', component: MainComponent, title: 'HOME' },
  {
    path: 'individual',
    loadComponent: () =>
      import('./pages/individual/individual.component').then(
        (m) => m.INDIVIDUALComponent
      ),
    title: 'INDIVIDUAL',
  },
  {
    path: 'our-services',
    loadComponent: () =>
      import(
        './pages/services/components/our-services/our-services.component'
      ).then((m) => m.OurServicesComponent),
    title: 'Our Services ',
  },
  {
    path: 'services/:id',
    loadComponent: () =>
      import(
        './pages/services/components/service-details/service-details.component'
      ).then((m) => m.ServiceDetailsComponent),
  },
  {
    path: 'LegalSdocumentationServices',
    loadComponent: () =>
      import(
        './pages/legal-documentation-services/legal-documentation-services.component'
      ).then((m) => m.LegalDocumentationServicesComponent),
  },
  {
    path: 'ChildCustody',
    loadComponent: () =>
      import('./pages/child-custody/child-custody.component').then(
        (m) => m.ChildCustodyComponent
      ),
  },
  {
    path: 'FAQ',
    loadComponent: () =>
      import('./pages/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./pages/blogs-details/blogs-details.component').then(
        (m) => m.BlogsDetailsComponent
      ),
    title: 'Blog Details',
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./pages/blogs/all-blogs/all-blogs.component').then(
        (m) => m.AllBlogsComponent
      ),
    title: 'Blog Details',
  },
];
