import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups/groups.service';

@Component({
  selector: 'app-join-card',
  templateUrl: './join-card.component.html',
  styleUrls: ['./join-card.component.scss']
})
export class JoinCardComponent implements OnInit {
  code: string;
  constructor(private groupService: GroupsService) {}

  ngOnInit() {}

  joinGroup() {
    this.groupService.joinGroup(this.code);
  }
}
