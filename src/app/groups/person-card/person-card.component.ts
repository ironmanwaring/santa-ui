import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  
  //getting data from parent component;
  @Input()
  person: Person = <Person>{};


  constructor() { }

  ngOnInit() {
  }

}
