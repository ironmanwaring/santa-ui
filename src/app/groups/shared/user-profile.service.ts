import { Injectable } from '@angular/core';
import { USER_PROFILE } from './mock-profile';

@Injectable()
export class UserProfileService {
  
  getUserProfile(){
    return USER_PROFILE;
  }
  
  constructor() { }

}
