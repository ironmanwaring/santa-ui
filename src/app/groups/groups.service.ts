import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Group, GroupDetail } from './group';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { ProfileDetail } from '../profile/profile';
import { ProgressService } from '../progress/progress.service';
import { User } from '../auth/user';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private BASE_URL: string = environment.apiUrl;

  userId: string;

  private _groups: Subject<Group[]> = new Subject<Group[]>();
  groups = this._groups.asObservable();

  private _group: Subject<GroupDetail> = new Subject<GroupDetail>();
  group = this._group.asObservable();

  constructor(private http: HttpClient, private auth: AuthService, private progress: ProgressService) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.userId;
        this.getGroups();
      }
    });
  }

  createGroup(): void {
    this.progress.setInProgress();
    const group = {
      name: 'New Group'
    };
    this.http.post<GroupDetail>(`${this.BASE_URL}/users/${this.userId}/groups`, group).subscribe(group => {
      this._group.next(group);
      this.progress.setResolved();
    });
  }

  getGroups(): void {
    this.progress.setInProgress();
    this.http.get<Group[]>(`${this.BASE_URL}/users/${this.userId}/groups`).subscribe(groups => {
      this._groups.next(groups);
      this.progress.setResolved();
    });
  }

  getGroup(groupId: string): void {
    this.progress.setInProgress();
    this.http.get<GroupDetail>(`${this.BASE_URL}/users/${this.userId}/groups/${groupId}`).subscribe(group => {
      this._group.next(group);
      this.progress.setResolved();
    });
  }

  updateProfile(groupId: string, profile: ProfileDetail): void {
    this.progress.setInProgress();
    this.http
      .post<ProfileDetail>(`${this.BASE_URL}/groups/${groupId}/users/${this.userId}/profile`, profile)
      .subscribe(profile => {
        this.progress.setResolved();
      });
  }
}
