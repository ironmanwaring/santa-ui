import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent {

  name: string = '';

  constructor(
    public dialogRef: MdDialogRef<AddGroupComponent>,
    public router: Router
  ) { }

  public saveGroup(): void {
    this.dialogRef.close(this.name);
    //TODO instead of closing dialog, save and then route to group details page
    this.router.navigate(['/groups', 2]);
  }

}
