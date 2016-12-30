/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonGroupComponent } from './person-group.component';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from '../shared/group.service';
import { GroupsComponent } from '../groups/groups.component';
import { GroupDetailComponent } from '../group-detail/group-detail.component';

describe('PersonGroupComponent', () => {
  let component: PersonGroupComponent;
  let fixture: ComponentFixture<PersonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PersonGroupComponent,
        GroupsComponent,
        GroupDetailComponent,   
      ],
        imports: [
        SharedModule,
      ],
      providers: [
        GroupService
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
