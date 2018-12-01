import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups/groups.service';
import { Group } from '../groups/group';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group: Group;

  constructor(private groupsService: GroupsService, private route: ActivatedRoute) {}

  ngOnInit() {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.group = this.groupsService.getGroup(groupId);
  }
}
