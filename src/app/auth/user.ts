export class User {
  userId: string;
  name: string;
  pictureUrl: string;
  email: string;

  constructor(auth0Profile: any) {
    this.userId = auth0Profile.user_id.replace('|', '-');
    this.name = auth0Profile.name;
    this.pictureUrl = auth0Profile.picture;
    this.email = auth0Profile.email;
  }
}
