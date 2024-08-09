import { Routes } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/new',
    component: ProductFormComponent,
  },
  {
    path: 'products/:id',
    component: ImagePreviewComponent,
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
];
