import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MdDialog } from '@angular/material';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { AddGroupComponent } from '../add-group/add-group.component';
import { JoinGroupComponent } from '../join-group/join-group.component';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  
  groups: Group[] = [];
  loading: boolean = true;
  viewAllActions: boolean = false;
  hideActionsIntent: boolean = false;
  
  constructor(
    private groupService: GroupService,
    private auth: AuthService,
    public dialog: MdDialog
  ) { }

  ngOnInit () {
    this.groupService.listByUser(this.auth.getUser().id)
      .subscribe( groups => {
        this.loading = false;
        this.groups = groups;
      });
  }

  public showAddGroup(): void {
    this.dialog.open(AddGroupComponent);
  }

  public showJoinGroup(): void {
    this.dialog.open(JoinGroupComponent);
  }

  public showAllActions(): void {
    this.viewAllActions = true;
    this.hideActionsIntent = false;
    setTimeout( () => this.hideActionsIntent = false, 200);
  }

  public hideActions(): void {
    this.viewAllActions = false;
    setTimeout( () => this.hideActionsIntent ? this.viewAllActions = false : '', 500);
  }

}
