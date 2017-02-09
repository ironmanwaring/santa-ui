import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { GroupService } from './shared/group.service';
import { GroupsRoutingModule } from './groups-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GroupCardComponent } from './group-card/group-card.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { InviteToGroupComponent } from './invite-to-group/invite-to-group.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule
  ],
  declarations: [
    GroupsComponent,
    GroupDetailComponent, 
    PersonCardComponent,
    GroupCardComponent,
    CreateGroupComponent,
    InviteToGroupComponent,
    JoinGroupComponent,
    UserProfileComponent
  ],
  providers: [
    GroupService
  ],
  entryComponents: [
    CreateGroupComponent,
    JoinGroupComponent,
    InviteToGroupComponent
  ]
})
export class GroupsModule { }
