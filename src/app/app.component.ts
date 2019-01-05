import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService, public authService: AuthService) {
    authService.handleAuthentication();
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    console.log('seeing if logged in');
    if (localStorage.getItem('isLoggedIn') === 'true') {
      console.log('logged in, renewing token');
      this.authService.renewTokens();
    }
  }
}
