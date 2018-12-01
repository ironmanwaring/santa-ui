import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'groupMembers' })
export class GroupMembersPipe implements PipeTransform {
  transform(members: string[], maxLength: number = 40): any {
    const display = members.join(', ');
    return display.length <= maxLength ? display : `${display.substring(0, maxLength)}...`;
  }
}
