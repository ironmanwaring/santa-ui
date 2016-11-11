import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { routing } from './users.routing';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserCardComponent
  ]
})
export class UsersModule { }
