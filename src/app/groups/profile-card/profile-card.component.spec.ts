/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { ProfileCardComponent } from './profile-card.component';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from '../shared/group.service';
import { GroupsComponent } from '../groups/groups.component';
import { GroupDetailComponent } from '../group-detail/group-detail.component';
import { GroupCardComponent } from '../group-card/group-card.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';


describe('PersonCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GroupsComponent,
        GroupDetailComponent, 
        ProfileCardComponent,
        GroupCardComponent,
        UserProfileComponent   
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
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
