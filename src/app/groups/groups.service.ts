import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Group, GroupDetail } from './group';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { ProfileDetail } from '../profile/profile';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  createGroup(): Observable<Group> {
    const group = {
      name: 'New Group'
    };
    return this.http.post<Group>(`${environment.apiUrl}/users/${this.auth.user.userId}/groups`, group);
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiUrl}/users/${this.auth.user.userId}/groups`);
  }

  getGroup(groupId: string): Observable<GroupDetail> {
    return this.http.get<GroupDetail>(`${environment.apiUrl}/users/${this.auth.user.userId}/groups/${groupId}`);
  }

  updateProfile(groupId: string, profile: ProfileDetail): Observable<ProfileDetail> {
    return this.http.post<ProfileDetail>(
      `${environment.apiUrl}/groups/${groupId}/users/${this.auth.user.userId}/profile`,
      profile
    );
  }
}
