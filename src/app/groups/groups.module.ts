import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { routing } from './groups.routing';
import { GroupsComponent } from './groups.component';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    GroupsComponent
  ]
})
export class GroupsModule { }
