import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Group } from './group';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private _groups: Subject<Group[]> = new BehaviorSubject<Group[]>([
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
  ]);

  groups = this._groups.asObservable();
}
