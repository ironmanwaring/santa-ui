import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('e0VgaUxRSIvPUVOy5Sx5rkgAdeN5rzja', 'santaswap.auth0.com', {});

  userProfile: any;

  constructor(
    private router: Router
  ) {
    this.initAuthentication();
  }

  public login(): void {
    this.lock.show();
  }

  public logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = null;
    this.redirectToHome();
  }

  public authenticated(): boolean {
    return tokenNotExpired();
  }

  public user(): any {
    return this.userProfile
  }

  public initAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.error(error);
        } else {
          this.cacheAuthResult(authResult, profile);
        }
      });
    });
  }

  public cacheAuthResult(authResult: any, profile: any): void {
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.userProfile = profile;
    this.redirectToGroups();
  }

  public redirectToGroups(): void {
    this.router.navigate(['/groups']);
  }

  public redirectToHome(): void {
    this.router.navigate(['/']);
  }
}
