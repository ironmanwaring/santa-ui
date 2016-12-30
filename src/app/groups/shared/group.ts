import { Person } from './person';

export class Group {
    id: number;
    name: string;
    rules: string;
    status: string;
    members: Person[];
}