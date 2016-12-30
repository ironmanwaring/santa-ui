/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GroupsComponent } from './groups.component';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from '../shared/group.service';
import { GroupDetailComponent } from '../group-detail/group-detail.component';
import { PersonGroupComponent } from '../person-group/person-group.component';


describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GroupsComponent,
        GroupDetailComponent,
        PersonGroupComponent  
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
    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
