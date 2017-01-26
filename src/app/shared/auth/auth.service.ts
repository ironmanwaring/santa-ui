import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class AuthService {

  options = {
    theme: { logo: './assets/img/santa.png' },
    languageDictionary: { title: 'Log in to Santa Swap' },
    auth: {
      redirectUrl: window.location.protocol + '//' + window.location.host,
      responseType: 'token'
    }
  };
  lock = new Auth0Lock('e0VgaUxRSIvPUVOy5Sx5rkgAdeN5rzja', 'santaswap.auth0.com', this.options);
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
    this.redirectOnAuthChange();
  }

  public authenticated(): boolean {
    return tokenNotExpired();
  }

  public user(): any {
    return this.userProfile
  }

  public cacheRedirectUrl(url: string): void {
    localStorage.setItem('redirectUrl', url);
  }

  private getRedirectUrl(): string {
    let redirectUrl = localStorage.getItem('redirectUrl');
    localStorage.removeItem('redirectUrl');
    return redirectUrl;
  }

  private initAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.error(error);
        } else {
          this.cacheAuthResult(authResult, profile);
          this.redirectOnAuthChange();
        }
      });
    });
  }

  private cacheAuthResult(authResult: any, profile: any): void {
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.userProfile = profile;
  }

  private ifAuthenticatedShowProfile() {
    if (this.authenticated()) {
      this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
  }

  private redirectOnAuthChange(): void {
    let cachedUrl = this.getRedirectUrl();
    if (this.authenticated()) {
      let url = cachedUrl ? cachedUrl : '/groups';
      this.router.navigate([url]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
