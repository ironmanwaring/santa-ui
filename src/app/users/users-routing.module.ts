import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'users', component:  UsersComponent },
  { path: 'users/login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
