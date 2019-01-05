import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups/groups.service';
import { GroupDetail } from '../groups/group';
import { ActivatedRoute } from '@angular/router';
import { ProfileDetail } from '../profile/profile';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group: GroupDetail = new GroupDetail();

  profile: ProfileDetail = new ProfileDetail();

  constructor(private groupsService: GroupsService, private route: ActivatedRoute) {}

  ngOnInit() {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.groupsService.getGroup(groupId).subscribe(group => {
      this.group = group;
      this.profile = group.profile;
    });
  }

  updateProfile() {
    console.log('Updating profile');
    this.groupsService.updateProfile(this.group.groupId, this.profile).subscribe(profile => {
      console.log('Profile updated');
      console.log(profile);
    });
  }
}
