import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent {

  name: string = '';

  constructor(
    public dialogRef: MdDialogRef<CreateGroupComponent>,
    private groupService: GroupService,
    public router: Router,
    private auth: AuthService
  ) { }

  public saveGroup(): void {
    this.groupService
        .createAndJoinGroup({ name: this.name }, this.auth.getUser())
        .subscribe( group => this.navigateToGroup(group));
  }

  private navigateToGroup(group: Group) {
    this.dialogRef.close(group.name);
    this.router.navigate(['/groups', group.id]);
  }

}
