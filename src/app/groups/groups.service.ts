import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Group } from './group';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  GROUPS: Group[] = [
    {
      name: 'Manwaring family',
      id: '1',
      status: 'Matched',
      members: ['Phillip', 'Stephanie', 'Andrew', 'Laurel', 'Claire']
    },
    {
      name: 'Godinez family',
      id: '2',
      status: 'Open',
      members: ['Stephanie', 'Allan', 'Gretel', 'Brian', 'Phillip', 'Josh']
    },
    { name: 'NY friends', id: '3', status: 'Closed', members: ['Stephanie', 'Ben', 'Stephanie'] }
  ];

  private _groups: Subject<Group[]> = new BehaviorSubject<Group[]>(this.GROUPS);

  groups = this._groups.asObservable();

  getGroup(id: string): Group {
    return this.GROUPS.find(group => group.id === id);
  }
}
