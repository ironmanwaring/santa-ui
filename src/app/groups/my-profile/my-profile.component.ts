import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../shared/profile';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  
  @Input()
  profile: Profile = <Profile>{};

  constructor(   ) { }

  ngOnInit() {
  }

}
