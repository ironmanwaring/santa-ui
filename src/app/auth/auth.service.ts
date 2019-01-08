import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Auth0UserProfile } from 'auth0-js';
import * as auth0 from 'auth0-js';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user';
import { ProgressService } from '../progress/progress.service';

@Injectable()
export class AuthService {
  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  user = this._user.asObservable();

  auth0 = new auth0.WebAuth({
    clientID: 'e0VgaUxRSIvPUVOy5Sx5rkgAdeN5rzja',
    domain: 'santaswap.auth0.com',
    responseType: 'token id_token',
    redirectUri: `${window.location.origin}/callback`,
    scope: 'openid'
  });

  constructor(public router: Router, private http: HttpClient, private progress: ProgressService) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  public login(): void {
    this.auth0.authorize();
  }

  private getProfile(): void {
    if (!this._accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    const self = this;
    this.auth0.client.userInfo(this._accessToken, (err, profile: Auth0UserProfile) => {
      if (profile) {
        const user = new User(profile);
        self._user.next(user);
        // localStorage.setItem('user', JSON.stringify(user));
        self.saveUser(user).subscribe(data => {
          self.router.navigate(['/groups']);
          self.progress.setResolved();
        });
      } else {
        console.log(err);
      }
    });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.progress.setInProgress();
        window.location.hash = '';
        this.localLogin(authResult);
        this.getProfile();
      } else if (err) {
        this.router.navigate(['']);
        console.log(err);
      }
    });
  }

  private saveUser(user: User): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

  private localLogin(authResult): void {
    localStorage.setItem('isLoggedIn', 'true');
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  }

  public renewTokens(): void {
    this._user.next(JSON.parse(localStorage.getItem('user')));
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.progress.setInProgress();
        this.localLogin(authResult);
        this.getProfile();
      } else if (err) {
        console.log(`Could not get a new token (${err.error}: ${err.errorDescription})`);
        this.logout();
      }
    });
  }

  public logout(): void {
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    this._user.next(<User>{});
    // Go back to the home route
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    return new Date().getTime() < this._expiresAt;
  }
}
