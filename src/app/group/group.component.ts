import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups/groups.service';
import { GroupDetail } from '../groups/group';
import { ActivatedRoute } from '@angular/router';
import { ProfileDetail } from '../profile/profile';
import { ProgressService } from '../progress/progress.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group: GroupDetail;

  profile: ProfileDetail;

  constructor(private groupsService: GroupsService, private route: ActivatedRoute, private progress: ProgressService) {}

  ngOnInit() {
    this.progress.setInProgress();
    const groupId = this.route.snapshot.paramMap.get('id');
    this.groupsService.getGroup(groupId).subscribe(group => {
      this.group = group;
      this.profile = group.profile;
      this.progress.setResolved();
    });
  }

  updateProfile() {
    this.progress.setInProgress();
    console.log('Updating profile');
    this.groupsService.updateProfile(this.group.groupId, this.profile).subscribe(profile => {
      console.log('Profile updated');
      console.log(profile);
      this.progress.setResolved();
    });
  }
}
