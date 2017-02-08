import { Profile } from './profile';

export class Group {
    id: string;
    name: string;
    rules: string;
    status: string;
    profiles?: Profile[];
}