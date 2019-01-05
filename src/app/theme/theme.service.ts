// Theme switching based on https://grensesnittet.computas.com/dynamic-themes-in-angular-material/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkTheme: Subject<boolean> = new BehaviorSubject<boolean>(true);
  isDarkTheme = this.darkTheme.asObservable();

  constructor() {
    const isDarkTheme: string = window.localStorage.getItem('isDarkTheme');
    if (isDarkTheme) {
      this.darkTheme.next(JSON.parse(isDarkTheme));
    }
  }

  setDarkTheme(isDarkTheme: boolean) {
    this.darkTheme.next(isDarkTheme);
    window.localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }
}
