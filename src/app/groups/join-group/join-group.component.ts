import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent {

  code: string = '';

  constructor(
    public dialogRef: MdDialogRef<JoinGroupComponent>,
    private groupService: GroupService,
    public router: Router,
    private auth: AuthService
  ) { }

  public joinGroup(): void {
    let user = {
      id: this.auth.getUser().id,
      name: this.auth.getUser().name,
      picture: this.auth.getUser().picture
    }
    this.groupService
        .joinGroup(this.code, user)
        .subscribe( group => this.navigateToGroup(group));
  }

  private navigateToGroup(group: Group) {
    this.dialogRef.close();
    this.router.navigate(['/groups', group.id]);
  }

}
