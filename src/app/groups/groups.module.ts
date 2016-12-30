import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { PersonGroupComponent } from './person-group/person-group.component';
import { GroupService } from './shared/group.service';
import { GroupsRoutingModule } from './groups-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule
  ],
  declarations: [
    GroupsComponent,
    GroupDetailComponent, 
    PersonGroupComponent
  ],
  providers: [
    GroupService
  ]
})
export class GroupsModule { }
