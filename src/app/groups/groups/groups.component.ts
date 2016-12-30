import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupsComponent implements OnInit {
  groups: Group[] = [];
  
  constructor(
    private groupService: GroupService
  ) { }

   // requests group lists of users groups
  ngOnInit () {
    this.groups = this.groupService.getAll();
  }

}
