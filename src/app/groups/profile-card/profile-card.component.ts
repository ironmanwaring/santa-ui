import { Component, Input } from '@angular/core';
import { Profile } from '../shared/profile';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  
  @Input()
  profile: Profile = <Profile>{};

  @Input()
  canEdit: boolean = false;

  constructor() { }

  updateProfile(): void {
    console.log('Not implemented yet');
  }

}
