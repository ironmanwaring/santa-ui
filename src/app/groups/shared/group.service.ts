import { Injectable } from '@angular/core';
import { Group } from './group';
import { FULL_GROUP } from './mock-data';

@Injectable()
export class GroupService {

  constructor() { }

  getAll(): Group[] {
    return FULL_GROUP;
  }

  getGroup(id: number): Group {
    return FULL_GROUP[0];
  }
}
