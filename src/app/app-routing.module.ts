import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/:id', component: GroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
