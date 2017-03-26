export class Invite {
  number: string;
  inviter: string;
  group: InviteGroup;
  domain: string;
}

class InviteGroup {
  name: string;
  code: string;
}
