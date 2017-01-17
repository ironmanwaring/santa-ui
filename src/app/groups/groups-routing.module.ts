import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../shared/auth/auth-guard.service';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuardService] },
  { path: 'groups/:id', component: GroupDetailComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GroupsRoutingModule {}
