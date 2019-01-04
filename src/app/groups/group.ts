import { Profile, ProfileDetail } from '../profile/profile';

export class Group {
  groupId: string;
  name: string;
  code: string;
  members: string[];
}

export class GroupDetail {
  groupId: string;
  name: string;
  code: string;
  members: Profile[];
  profile: ProfileDetail;
}
