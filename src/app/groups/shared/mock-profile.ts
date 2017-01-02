import { UserProfile } from './user-profile';

export const USER_PROFILE: UserProfile = {
    name: "Phillip",
    address: "413 E 85th St NY, NY 10028",
    wants: [
        { 
            item: "A thing 1",
            link: "www.amazon.com"
        },
        {
            item: "A thing 2",
            link: "www.nordstrom.com"
        },
        {
            item: "A thing 3 without a link"
        }


    ],
}