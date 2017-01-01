import { Component, Input } from '@angular/core';
import { Group } from '../shared/group';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent {

  @Input()
  group: Group = <Group>{};

  constructor() { }
}
