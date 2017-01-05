import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';

import 'rxjs/add/operator/switchMap';

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
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

 // requests group form users group list
  ngOnInit () {
    this.route.params
        .switchMap( (params: Params) => 
    this.groupService
        .getGroup(params['id']))
        .subscribe( (group: Group) => {
          this.loading = false;
          this.group = group;
        });
  }

}
