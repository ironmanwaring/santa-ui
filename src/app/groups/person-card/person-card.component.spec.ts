/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PersonCardComponent } from './person-card.component';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from '../shared/group.service';
import { GroupsComponent } from '../groups/groups.component';
import { GroupDetailComponent } from '../group-detail/group-detail.component';
import { GroupCardComponent } from '../group-card/group-card.component';

describe('PersonCardComponent', () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;

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
    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
