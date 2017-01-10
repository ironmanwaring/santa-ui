import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  
  //getting data from parent component;
  @Input()
  person: User = <User>{};


  constructor() { }

  ngOnInit() {
  }

}
