/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

import { GroupsComponent } from '../groups/groups.component';
import { GroupService } from '../shared/group.service';
import { GroupDetailComponent } from '../group-detail/group-detail.component';
import { PersonCardComponent } from '../person-card/person-card.component';
import { GroupCardComponent } from '../group-card/group-card.component';

describe('GroupDetailComponent', () => {
  let component: GroupDetailComponent;
  let fixture: ComponentFixture<GroupDetailComponent>;

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
    fixture = TestBed.createComponent(GroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
