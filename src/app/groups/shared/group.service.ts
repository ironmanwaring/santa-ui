import { Injectable } from '@angular/core';
import { Group } from './group';
import { GROUPDATA } from './group-mocks';

@Injectable()
export class GroupService {

  constructor() { }

  getAll(): Group[] {
    return GROUPDATA;
  }

  getGroup(id: number): Group {
    return GROUPDATA[0];
  }
}
