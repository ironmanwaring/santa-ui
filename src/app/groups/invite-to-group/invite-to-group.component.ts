import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-invite-to-group',
  templateUrl: './invite-to-group.component.html',
  styleUrls: ['./invite-to-group.component.scss']
})
export class InviteToGroupComponent {

  name: string = '';

  constructor(
    public dialogRef: MdDialogRef<InviteToGroupComponent>,
    private groupService: GroupService,
    public router: Router,
    private authService: AuthService
  ) { }

  public saveGroup(): void {
    let group = { name: this.name };
    let profile = {
      name: this.authService.getUser().name,
      id: this.authService.getUser().id,
      picture: this.authService.getUser().picture,
      email: this.authService.getUser().email
    };
    this.groupService
        .createAndJoinGroup(group, profile)
        .subscribe( group => this.navigateToGroup(group));
  }

  private navigateToGroup(group: Group) {
    this.dialogRef.close(group.name);
    this.router.navigate(['/groups', group.id]);
  }

}
