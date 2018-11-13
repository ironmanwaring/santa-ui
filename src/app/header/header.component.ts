import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Santa Swap';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

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
