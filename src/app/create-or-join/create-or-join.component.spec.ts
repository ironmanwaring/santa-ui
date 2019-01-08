import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrJoinComponent } from './create-or-join.component';
import { CreateCardComponent } from '../create-card/create-card.component';
import { JoinCardComponent } from '../join-card/join-card.component';
import { AuthService } from '../auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateOrJoinComponent', () => {
  let component: CreateOrJoinComponent;
  let fixture: ComponentFixture<CreateOrJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CreateCardComponent, JoinCardComponent, RouterTestingModule],
      declarations: [CreateOrJoinComponent],
      providers: [AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
