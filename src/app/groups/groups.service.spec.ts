import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';

import { AuthService } from '../auth/auth.service';
import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [AuthService]
    }).compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupsService = TestBed.get(GroupsService);
    expect(service).toBeTruthy();
  });
});
