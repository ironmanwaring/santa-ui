// Theme switching based on https://grensesnittet.computas.com/dynamic-themes-in-angular-material/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isDarkTheme = this.darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    console.log(isDarkTheme);
    this.darkTheme.next(isDarkTheme);
  }
}
