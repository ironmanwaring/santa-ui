import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/distinctUntilChanged';

declare var ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentRoute: string = '';

  constructor( private router: Router ) { 
    router.events.distinctUntilChanged( (previous: any, current: any) => {
      if (current instanceof NavigationEnd) {
        return previous.url === current.url;
      }
      return true;
    }).subscribe( (page: any) => ga('send', 'pageview', page.url) );
  }  
}
