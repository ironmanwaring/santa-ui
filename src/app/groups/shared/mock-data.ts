import { Group } from './group';
import { Person } from './person';

import { GROUP_DATA as groupData } from './mock-groups';
import { PEOPLE_DATA as peopleData } from './mock-people';

groupData.forEach( group => group.members = peopleData)

export const FULL_GROUP: Group[] = groupData;

export const PEOPLE_ONLY: Person[] = peopleData;
