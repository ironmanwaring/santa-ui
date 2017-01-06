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
    this.ifAuthenticatedShowProfile();
  }

  public login(): void {
    this.lock.show();
  }

  public logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = null;
    this.redirect();
  }

  public authenticated(): boolean {
    return tokenNotExpired();
  }

  public user(): any {
    return this.userProfile
  }

  private initAuthentication(): void {
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

  private cacheAuthResult(authResult: any, profile: any): void {
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.userProfile = profile;
    this.redirect();
  }

  private ifAuthenticatedShowProfile() {
    if(this.authenticated()) {
      this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
  }

  private redirect(): void {
    if(this.authenticated()) {
      this.router.navigate(['/groups']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
