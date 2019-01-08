import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Group, GroupDetail } from './group';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { ProfileDetail } from '../profile/profile';
import { ProgressService } from '../progress/progress.service';
import { User } from '../auth/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private BASE_URL: string = environment.apiUrl;

  userId: string;

  private _groups: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
  groups = this._groups.asObservable();

  private _group: BehaviorSubject<GroupDetail> = new BehaviorSubject<GroupDetail>(null);
  group = this._group.asObservable();

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private progress: ProgressService,
    private router: Router
  ) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.userId;
        this.getGroups();
      }
    });
  }

  createGroup(name: string): void {
    this.progress.setInProgress();
    const group = { name };
    this.http.post<GroupDetail>(`${this.BASE_URL}/users/${this.userId}/groups`, group).subscribe(group => {
      this._group.next(group);
      this.router.navigate([`/groups/${group.groupId}`]);
      this.progress.setResolved();
    });
  }

  joinGroup(code: string): void {
    this.progress.setInProgress();
    this.http.post<GroupDetail>(`${this.BASE_URL}/groups/${code}/users/${this.userId}`, { code }).subscribe(group => {
      this._group.next(group);
      this.router.navigate([`/groups/${group.groupId}`]);
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
