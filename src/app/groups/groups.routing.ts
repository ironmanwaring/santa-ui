import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'groups', component: GroupsComponent },
//   { path: 'users/:id', component: UserDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
