import { Component, OnInit } from '@angular/core';

/*------ models ------*/
import { UserProfile } from '../shared/user-profile';

/*------ injectable services ------*/
import { UserProfileService } from '../shared/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: UserProfile;
  submitted: Boolean = false;


  constructor( 
    private userProfileService: UserProfileService 
  ) { }

  ngOnInit() {
    this.user = this.userProfileService.getUserProfile();
  }

   onSubmit() { 
    this.submitted = true; 
  }

}
