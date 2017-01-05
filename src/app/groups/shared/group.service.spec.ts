/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { GroupService } from './group.service';
import { SharedModule } from '../../shared/shared.module';

describe('GroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      providers: [
        GroupService
      ]
    });
  });

  it('should ...', inject([GroupService], (service: GroupService) => {
    expect(service).toBeTruthy();
  }));
});
