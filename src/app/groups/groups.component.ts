import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsService } from './groups.service';
import { Group } from './group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  group: Group;

  constructor(private groupsService: GroupsService) {}

  ngOnInit() {
    this.groupsService.getGroups().subscribe(groups => (this.groups = groups));
  }

  createGroup() {
    this.groupsService.createGroup().subscribe(group => (this.group = group));
  }
}
