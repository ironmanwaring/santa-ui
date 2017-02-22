export class User {
    public email: string;
    public name: string;
    public givenName: string;
    public picture: string;
    public id: string;

    constructor( private profile: any ) {
        this.email = profile.email;
        this.name = profile.name;
        this.givenName = profile.given_name
        this.picture = profile.picture_large ? profile.picture_large : profile.picture
        this.id = profile.user_id.replace('|', '');
    }
}