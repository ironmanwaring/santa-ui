/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdDialogRef, OverlayRef, MdDialogModule } from '@angular/material';

import { AddGroupComponent } from './add-group.component';
import { SharedModule } from '../../shared/shared.module';

describe('AddGroupComponent', () => {
  let component: AddGroupComponent;
  let fixture: ComponentFixture<AddGroupComponent>;

  // TODO fix when issue resolved https://github.com/angular/angular/issues/10760
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AddGroupComponent,
  //     ],
  //     imports: [
  //       SharedModule,
  //       MdDialogModule.forRoot()
  //     ],
  //     providers: [ ]
  //   })
  //   .overrideModule(BrowserDynamicTestingModule, {
  //     set: {
  //       entryComponents: [ AddGroupComponent ]
  //     }
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddGroupComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
