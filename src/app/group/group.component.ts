import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups/groups.service';
import { GroupDetail } from '../groups/group';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group: GroupDetail;

  profile: FormGroup;

  constructor(private groupsService: GroupsService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.groupsService.getGroup(groupId).subscribe((group: GroupDetail) => {
      this.group = group;
      console.log(group);
      this.profile.patchValue(group.profile);
    });
    this.profile = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      giftIdeas: []
    });
  }
}
