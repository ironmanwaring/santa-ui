import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'app-person-group',
  templateUrl: './person-group.component.html',
  styleUrls: ['./person-group.component.scss']
})
export class PersonGroupComponent implements OnInit {
  
  //getting data from parent component;
  @Input()
  person: Person = <Person>{};


  constructor() { }

  ngOnInit() {
  }

}
