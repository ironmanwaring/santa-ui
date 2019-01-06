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

  constructor(private theme: ThemeService, public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.isDarkTheme = this.theme.isDarkTheme;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }
}
