import { Component, OnInit } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  // initialize with an empty group object to avoid null pointer exceptions
  group: Group = <Group>{};
  loading: boolean = true;

 // comma separated injectables
  constructor(
    private groupService: GroupService
  ) { }

 // requests group form users group list
  ngOnInit () {
    this.groupService.getGroup('4af1df30-d2f3-11e6-acaf-cf35194a9c06').subscribe(
      group => {
        console.log(group);
        this.group = group;
      }
    );
  }

}
