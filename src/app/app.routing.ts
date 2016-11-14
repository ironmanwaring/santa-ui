import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'users', redirectTo: 'users', pathMatch: 'full' },
  { path: 'groups', redirectTo: 'groups', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);