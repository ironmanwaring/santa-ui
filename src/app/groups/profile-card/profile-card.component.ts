import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../shared/profile';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  outputs: ['updateProfile']
})
export class ProfileCardComponent {
  
  @Input()
  profile: Profile = <Profile>{};

  @Input()
  canEdit: boolean = false;

  @Output()
  updateProfile: EventEmitter<Profile> = new EventEmitter<Profile>();

  constructor() { }

  update(): void {
    console.log(this.profile);
    this.updateProfile.emit(this.profile);
  }

}
