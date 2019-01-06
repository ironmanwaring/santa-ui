import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CreateOrJoinComponent } from './create-or-join/create-or-join.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/:groupId', component: GroupComponent },
  { path: 'create-or-join', component: CreateOrJoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
