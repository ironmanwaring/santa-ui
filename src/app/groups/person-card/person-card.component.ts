import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../shared/profile';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  
  //getting data from parent component;
  @Input()
  person: Profile = <Profile>{};


  constructor() { }

  ngOnInit() {
  }

}
