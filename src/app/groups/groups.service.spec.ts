import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupsService = TestBed.get(GroupsService);
    expect(service).toBeTruthy();
  });
});
