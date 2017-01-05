import { Person } from './person';

export class Group {
    id: string;
    name: string;
    rules: string;
    status: string;
    members?: Person[];
}