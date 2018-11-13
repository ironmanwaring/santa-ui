import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [{ path: 'profile', component: ProfileComponent }, { path: 'group', component: GroupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
