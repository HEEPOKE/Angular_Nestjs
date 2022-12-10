import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
