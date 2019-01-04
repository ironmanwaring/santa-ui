import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Group, GroupDetail } from './group';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  constructor(private http: HttpClient) {}
  GROUPS: Group[] = [
    {
      name: 'Manwaring family',
      groupId: '1',
      code: 'SDFJKL',
      members: ['Phillip Manwaring', 'Stephanie Manwaring', 'Andrew Manwaring', 'Laurel Manwaring', 'Claire Manwaring']
    },
    {
      name: 'Godinez family',
      groupId: '2',
      code: 'KLJSDF',
      members: [
        'Stephanie Manwaring',
        'Allan Godinez',
        'Gretel Godinez',
        'Brian Godinez',
        'Phillip Manwaring',
        'Josh Godinez'
      ]
    },
    {
      name: 'NY friends',
      groupId: '3',
      code: 'SDFJKL',
      members: ['Stephanie Sunderland', 'Ben Sunderland', 'Stephanie Manwaring']
    }
  ];

  // private _groups: Subject<Group[]> = new BehaviorSubject<Group[]>(this.GROUPS);

  // groups = this._groups.asObservable();

  getGroups(): Observable<Group[]> {
    const userId = 'b5f6d9c9-cc8c-4654-9083-208548d2dbce';
    return <Observable<Group[]>>this.http.get(`${environment.apiUrl}/users/${userId}/groups`);
  }

  getGroup(groupId: string): Observable<GroupDetail> {
    const userId = 'b5f6d9c9-cc8c-4654-9083-208548d2dbce';
    return <Observable<GroupDetail>>this.http.get(`${environment.apiUrl}/users/${userId}/groups/${groupId}`);
  }
}
