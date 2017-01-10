import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { AuthService } from '../../shared/auth/auth.service';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent {

  name: string = '';

  constructor(
    public dialogRef: MdDialogRef<AddGroupComponent>,
    private groupService: GroupService,
    public router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  public saveGroup(): void {
    this.groupService
        .createGroup(this.name)
        //change to call addUserToGroup
        // .subscribe( group => this.navigateToGroup(group));
        .subscribe( group => this.addUserToGroup(group));
  }

  private navigateToGroup(group: Group) {
    this.dialogRef.close(group.name);
    this.router.navigate(['/groups', group.id]);
  }

  private addUserToGroup(group: Group) {
    let user = {
      name: this.authService.user().name,
      userId: this.authService.user().user_id,
      picture: this.authService.user().picture
    };
    this.userService
        .addUserToGroup(user, group.id)
        .subscribe( user => this.navigateToGroup(group))
  }

}
