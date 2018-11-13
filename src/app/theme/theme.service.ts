// Theme switching based on https://grensesnittet.computas.com/dynamic-themes-in-angular-material/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme: Subject<boolean> = new BehaviorSubject<boolean>(true);
  // private darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this.darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    console.log(isDarkTheme);
    this.darkTheme.next(isDarkTheme);
  }
}
