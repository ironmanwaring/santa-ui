// Theme switching based on https://grensesnittet.computas.com/dynamic-themes-in-angular-material/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private COOKIE: string = 'isDarkTheme';

  private darkTheme: Subject<boolean> = new BehaviorSubject<boolean>(true);
  isDarkTheme = this.darkTheme.asObservable();

  constructor(private cookieService: CookieService) {
    const isDarkTheme: string = this.cookieService.get(this.COOKIE);
    if (isDarkTheme) {
      this.darkTheme.next(JSON.parse(isDarkTheme));
    }
  }

  setDarkTheme(isDarkTheme: boolean) {
    this.darkTheme.next(isDarkTheme);
    this.cookieService.set(this.COOKIE, JSON.stringify(isDarkTheme));
  }
}
