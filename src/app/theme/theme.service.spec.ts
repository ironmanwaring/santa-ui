import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CookieService]
    })
  );

  it('should be created', () => {
    const service: ThemeService = TestBed.get(ThemeService);
    expect(service).toBeTruthy();
  });
});
