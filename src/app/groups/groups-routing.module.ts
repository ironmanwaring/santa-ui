import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/groupId', component: GroupDetailComponent }
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
