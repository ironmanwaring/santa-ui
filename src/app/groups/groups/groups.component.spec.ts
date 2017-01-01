/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { GroupsComponent } from './groups.component';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from '../shared/group.service';
import { GroupDetailComponent } from '../group-detail/group-detail.component';
import { PersonCardComponent } from '../person-card/person-card.component';
import { GroupCardComponent } from '../group-card/group-card.component';

describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GroupsComponent,
        GroupDetailComponent, 
        PersonCardComponent,
        GroupCardComponent   
      ],
        imports: [
        SharedModule,
        RouterTestingModule
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
