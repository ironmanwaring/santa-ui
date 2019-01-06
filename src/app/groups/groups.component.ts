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
  groups: Observable<Group[]>;

  constructor(private groupService: GroupsService) {}

  ngOnInit() {
    this.groups = this.groupService.groups;
    this.groupService.getGroups();
  }
}
