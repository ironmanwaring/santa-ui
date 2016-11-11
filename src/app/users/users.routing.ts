import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
//   { path: 'users/:id', component: UserDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
