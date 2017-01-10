/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { SharedModule } from '../../shared/shared.module';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
        SharedModule
      ],
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
