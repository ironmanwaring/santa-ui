import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MdDialog } from '@angular/material';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  
  groups: Group[] = [];
  showAddGroup: boolean = false;
  
  constructor(
    private groupService: GroupService,
    public dialog: MdDialog
  ) { }

  ngOnInit () {
    this.groups = this.groupService.getAll();
  }

  public showGroup(): void {
    this.showAddGroup = true;
    // this.dialog.open(AddGroupDialog);
  }

}
