import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCardComponent } from './join-card.component';
import { GroupsService } from '../groups/groups.service';
import { SharedModule } from '../shared/shared.module';

describe('JoinCardComponent', () => {
  let component: JoinCardComponent;
  let fixture: ComponentFixture<JoinCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [JoinCardComponent],
      providers: [GroupsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
