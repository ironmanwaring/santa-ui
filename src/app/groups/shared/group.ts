import { User } from './user';

export class Group {
    id: string;
    name: string;
    rules: string;
    status: string;
    members?: User[];
}