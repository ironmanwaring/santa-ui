import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'SANTA SWAP';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService, private auth: AuthService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  enableDarkTheme() {
    this.themeService.setDarkTheme(true);
  }

  enableLightTheme() {
    this.themeService.setDarkTheme(false);
  }
}
