import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Group } from './group';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private _groups: Subject<Group[]> = new BehaviorSubject<Group[]>([
    { name: 'Manwaring family', id: '1' },
    { name: 'Godinez family', id: '2' },
    { name: 'NY friends', id: '3' }
  ]);

  groups = this._groups.asObservable();
}
