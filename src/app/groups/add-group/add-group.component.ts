import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';


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
    public router: Router
  ) { }

  public saveGroup(): void {
    this.groupService
        .createGroup(this.name)
        .subscribe( group => this.navigateToGroup(group));
  }

  private navigateToGroup(group: Group) {
    this.dialogRef.close(group.name);
    this.router.navigate(['/groups', group.id]);
  }

}
