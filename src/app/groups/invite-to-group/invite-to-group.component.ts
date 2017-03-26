import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Invite } from '../shared/invite';
import { Group } from '../shared/group';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-invite-to-group',
  templateUrl: './invite-to-group.component.html',
  styleUrls: ['./invite-to-group.component.scss']
})
export class InviteToGroupComponent {

  number: string = '';

  constructor(
    public dialogRef: MdDialogRef<InviteToGroupComponent>,
    @Inject(MD_DIALOG_DATA) public data: Group,
    private groupService: GroupService,
    public router: Router,
    private authService: AuthService
  ) { }

  inviteToGroup() {
    let invite = {
      number: this.number,
      inviter: this.authService.getUser().givenName,
      domain: window.location.host,
      group: {
        name: this.data.name,
        code: this.data.code
      }
    };
    // this.groupService
    //     .inviteToGroup(invite, this.data.id)
    //     .subscribe(this.showSuccess);
    this.showSuccess('hello');
  }

  showSuccess(response: any) {
    console.log('Success, now closing dialogref', this.dialogRef);
    this.dialogRef.close();
  }

}
