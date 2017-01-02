export class UserProfile {
    name: string;
    address: string;
    wants: Wants[];
}

export class Wants {
    item: string;
    link?: string;
}
