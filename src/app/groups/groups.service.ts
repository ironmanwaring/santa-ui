import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Group, GroupDetail } from './group';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { ProfileDetail } from '../profile/profile';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private BASE_URL: string = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) {}

  createGroup(): Observable<Group> {
    const group = {
      name: 'New Group'
    };
    const userId = this.auth.user ? this.auth.user.userId : '';
    return this.http.post<Group>(`${this.BASE_URL}/users/${userId}/groups`, group);
  }

  getGroups(): Observable<Group[]> {
    const userId = this.auth.user ? this.auth.user.userId : '';
    return this.http.get<Group[]>(`${this.BASE_URL}/users/${userId}/groups`);
  }

  getGroup(groupId: string): Observable<GroupDetail> {
    const userId = this.auth.user ? this.auth.user.userId : '';
    return this.http.get<GroupDetail>(`${this.BASE_URL}/users/${userId}/groups/${groupId}`);
  }

  updateProfile(groupId: string, profile: ProfileDetail): Observable<ProfileDetail> {
    const userId = this.auth.user ? this.auth.user.userId : '';
    return this.http.post<ProfileDetail>(`${this.BASE_URL}/groups/${groupId}/users/${userId}/profile`, profile);
  }
}
