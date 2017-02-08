import { User } from './user';

export class Group {
    groupId: string;
    name: string;
    rules: string;
    status: string;
    users?: User[];
}