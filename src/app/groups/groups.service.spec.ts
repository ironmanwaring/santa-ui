import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       BrowserAnimationsModule,
  //       RouterTestingModule,
  //       MatToolbarModule,
  //       MatIconModule,
  //       MatMenuModule,
  //       MatButtonModule,
  //       MatSlideToggleModule,
  //       MatFormFieldModule,
  //       MatSelectModule,
  //       MatInputModule,
  //       MatExpansionModule,
  //       MatCardModule,
  //       HttpClientModule
  //     ],
  //     providers: [CookieService, AuthService],
  //     declarations: [AppComponent, HeaderComponent]
  //   }).compileComponents();
  // }));
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupsService = TestBed.get(GroupsService);
    expect(service).toBeTruthy();
  });
});
